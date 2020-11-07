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
import useBlogPostForm from "../../../hooks/useBlogPostForm";
import { createBlog } from "../../../api/blogs";
import classnames from "classnames";
import styles from "./styles/create.module.scss";

export default function Create({
  onBackClick,
  setShowCreatePost,
  setCreateMessage,
  blog,
}) {
  const form = useBlogPostForm(blog);

  const containerClassNames = classnames("p-5", styles.container, {
    [styles.expand]: form.expand,
  });

  const previewTextClassNames = classnames("rounded-0", {
    [styles.hide]: !form.showPreviewText,
  });

  const schema = yup.object({
    title: yup.string().required("required"),
    previewText: yup.string().required("required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    form.setError(false);

    const blog = {
      title: values.title,
      tags: form.tags,
      hidden: form.saveAsDraft,
      previewText: values.previewText,
      body: form.body,
      author: "tester", // for testing
      date: {
        year: "2020",
        month: "September",
        day: "03",
      },
    };
    const response = await createBlog(blog);

    if (response.error) {
      form.setError(response.error);
    } else {
      setShowCreatePost(false);

      setCreateMessage("Successfully created a new blog post!");
      setTimeout(() => setCreateMessage(""), 10000);
    }
  };

  return (
    <div className={containerClassNames}>
      {form.error ? (
        <div className="border-dark-red p-3">{form.error}</div>
      ) : null}
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          title: blog?.title || "",
          previewText: blog?.previewText || "",
        }}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => {
          return (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="title">
                <div className="d-flex justify-content-between">
                  <Form.Label className={styles.label}>Title</Form.Label>
                  <div>
                    {form.expand ? (
                      <FontAwesomeIcon
                        className={styles.expandIcon}
                        icon={faCompressArrowsAlt}
                        size="lg"
                        onClick={() => form.setExpand(false)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className={styles.expandIcon}
                        icon={faExpandArrowsAlt}
                        size="lg"
                        onClick={() => form.setExpand(true)}
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
                          defaultChecked={form.tags.includes("doggo")}
                          onChange={form.handleTagsChange}
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
                          defaultChecked={form.tags.includes("ipsum")}
                          onChange={form.handleTagsChange}
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
                          defaultChecked={form.tags.includes("dog")}
                          onChange={form.handleTagsChange}
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
                          checked={form.saveAsDraft}
                          onChange={(event) => {
                            if (event.target.checked) {
                              form.setSaveAsDraft(true);
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
                          checked={!form.saveAsDraft}
                          onChange={(event) => {
                            if (event.target.checked) {
                              form.setSaveAsDraft(false);
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
                  {form.showPreviewText ? (
                    <FontAwesomeIcon
                      className={"ml-2 " + styles.previewTextIcon}
                      icon={faMinusSquare}
                      onClick={() => form.setShowPreviewText(false)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={"ml-2 " + styles.previewTextIcon}
                      icon={faPlusSquare}
                      onClick={() => form.setShowPreviewText(true)}
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
                  onEditorChange={form.handleEditorChange}
                  value={form.body}
                  init={{
                    height: 500,
                    menubar: "file edit insert view format table tools help",
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                      "codesample",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic forecolor backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | codesample | removeformat | fullscreen",
                    color_map: [
                      "444444",
                      "Black",
                      "6c8c74",
                      "Primary green",
                      "5b7349",
                      "Secondary green",
                      "ebeef2",
                      "Grey",
                      "d2d5d9",
                      "Dark grey",
                      "b0bdd9",
                      "Blue",
                      "dc3545",
                      "Red",
                      "a62834",
                      "Dark red",
                      "ffffff",
                      "White",
                    ],
                  }}
                />
              </Form.Group>
              <div className="text-right">
                <Button
                  className="mr-3"
                  variant="outline-secondary-green"
                  type="submit"
                >
                  {blog ? "Save" : "Create"}
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
