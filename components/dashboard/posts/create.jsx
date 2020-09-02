import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Editor } from "@tinymce/tinymce-react";
import { Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import styles from "./styles/create.module.scss";

export default function Create({ onBackClick }) {
  const [showPreviewText, setShowPreviewText] = useState(true);
  const [expand, setExpand] = useState(false);

  const [tags, setTags] = useState([]);
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const [body, setBody] = useState("");

  const handleTagsChange = (event) => {
    let updatedTags = [...tags];
    const tag = event.target.value;
    const checked = event.target.checked;
    const tagInList = updatedTags.includes(tag);

    if (checked && !tagInList) {
      updatedTags.push(tag);
    } else if (!checked && tagInList) {
      updatedTags = updatedTags.filter((prevTag) => prevTag !== tag);
    }

    setTags(updatedTags);
  };

  const handleEditorChange = (content, editor) => {
    console.log(content);
    setBody(content);
  };

  const containerClassNames = classnames("p-5", styles.container, {
    [styles.expand]: expand,
  });

  const previewTextClassNames = classnames("rounded-0", {
    [styles.hide]: !showPreviewText,
  });

  const schema = yup.object({
    title: yup.string().required("required"),
    previewText: yup.string().required("required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log(values, tags, saveAsDraft);
  };

  return (
    <div className={containerClassNames}>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          title: "",
          previewText: "",
        }}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => {
          return (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="title">
                <div className="d-flex justify-content-between">
                  <Form.Label className={styles.label}>Title</Form.Label>
                  <div>
                    {expand ? (
                      <FontAwesomeIcon
                        className={styles.expandIcon}
                        icon={faCompressArrowsAlt}
                        size="lg"
                        onClick={() => setExpand(false)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className={styles.expandIcon}
                        icon={faExpandArrowsAlt}
                        size="lg"
                        onClick={() => setExpand(true)}
                      />
                    )}
                  </div>
                </div>
                <Form.Control
                  className="rounded-0"
                  name="title"
                  autoComplete="off"
                  value={values.title}
                  onChange={handleChange}
                  isInvalid={touched.title && errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Row className="my-4">
                <Col className="pr-5 border-right" xs="auto">
                  <Form.Group className="mb-0" controlId="tags">
                    <Form.Label className={styles.label}>Tags</Form.Label>
                    <Form.Row>
                      <Col xs="auto">
                        <Form.Check
                          custom
                          inline
                          label="doggo"
                          type="checkbox"
                          id="doggo"
                          value="doggo"
                          onChange={handleTagsChange}
                        />
                      </Col>
                      <Col xs="auto">
                        <Form.Check
                          custom
                          inline
                          label="ipsum"
                          type="checkbox"
                          id="ipsum"
                          value="ipsum"
                          onChange={handleTagsChange}
                        />
                      </Col>
                      <Col xs="auto">
                        <Form.Check
                          className="mr-0"
                          custom
                          inline
                          label="dog"
                          type="checkbox"
                          id="dog"
                          value="dog"
                          onChange={handleTagsChange}
                        />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Col>
                <Col className="pl-5" xs="auto">
                  <Form.Group className="mb-0" controlId="hidden">
                    <Form.Label className={styles.label}>
                      Save as draft
                    </Form.Label>
                    <Form.Row>
                      <Col xs="auto">
                        <Form.Check
                          custom
                          inline
                          label="true"
                          type="checkbox"
                          id="true"
                          value="true"
                          checked={saveAsDraft}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSaveAsDraft(true);
                            }
                          }}
                        />
                      </Col>
                      <Col xs="auto">
                        <Form.Check
                          custom
                          inline
                          label="false"
                          type="checkbox"
                          id="false"
                          value="false"
                          checked={!saveAsDraft}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSaveAsDraft(false);
                            }
                          }}
                        />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group className="mt-3" controlId="previewText">
                <Form.Label className={styles.label}>
                  <span>Preview</span>
                  {showPreviewText ? (
                    <FontAwesomeIcon
                      className={"ml-2 " + styles.previewTextIcon}
                      icon={faMinusSquare}
                      onClick={() => setShowPreviewText(false)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={"ml-2 " + styles.previewTextIcon}
                      icon={faPlusSquare}
                      onClick={() => setShowPreviewText(true)}
                    />
                  )}
                </Form.Label>
                <Form.Control
                  className={previewTextClassNames}
                  as="textarea"
                  name="previewText"
                  rows={4}
                  autoComplete="off"
                  value={values.previewText}
                  onChange={handleChange}
                  isInvalid={touched.previewText && errors.previewText}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.previewText}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-3" controlId="body">
                <Form.Label className={styles.label}>Body</Form.Label>
                <Editor
                  apiKey="hzstptt72sqz7yzd6fp6rgbp7bjq8zjwkx7o6rkkohns8u3p"
                  textareaName="body"
                  onEditorChange={handleEditorChange}
                  value={body}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  }}
                />
              </Form.Group>
              <div className="text-right">
                <Button
                  className="mr-3"
                  variant="outline-secondary-green"
                  type="submit"
                >
                  Create
                </Button>
                <Button variant="outline-dark-red" onClick={onBackClick}>
                  Cancel
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
