import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import FormError from "./formError";
import Spinner from "./spinner";
import useFormValue from "../../hooks/useFormValue";
import classnames from "classnames";
import styles from "./styles/form.module.scss";

const FormComponent = ({ onSubmit, errorMessage, authenticating }) => {
  const [
    username,
    handleUsernameChange,
    usernameError,
    setUsernameError,
  ] = useFormValue("username", "");
  const [
    password,
    handlePasswordChange,
    passwordError,
    setPasswordError,
  ] = useFormValue("password", "");

  const handleSubmit = (event) => {
    event.preventDefault();

    const usernameRequired = username ? false : true;
    const passwordRequired = password ? false : true;

    setUsernameError(usernameRequired);
    setPasswordError(passwordRequired);

    if (usernameRequired || passwordRequired) return;

    onSubmit(username, password);
  };

  const usernameInputClassNames = classnames({
    [styles.errorBorder]: usernameError,
  });
  const passwordInputClassNames = classnames({
    [styles.errorBorder]: passwordError,
  });

  return (
    <div
      className={"bg-white rounded border p-5 shadow w-40 " + styles.container}
    >
      <FormError className="small d-block mb-3" show={errorMessage}>
        {errorMessage}
      </FormError>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label className="d-flex">
            <FontAwesomeIcon className="mr-2" icon={faUser} />
            <span>Username</span>
            <FormError className="small ml-auto" show={usernameError}>
              Required
            </FormError>
          </Form.Label>
          <Form.Control
            className={usernameInputClassNames}
            name="username"
            onChange={handleUsernameChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="d-flex">
            <FontAwesomeIcon className="mr-2" icon={faUnlockAlt} />
            <span>Password</span>
            <FormError className="small ml-auto" show={passwordError}>
              Required
            </FormError>
          </Form.Label>
          <Form.Control
            className={passwordInputClassNames}
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button className="mt-2" variant="primary-green" type="submit">
          Log in
        </Button>
      </Form>
      {authenticating ? <Spinner /> : null}
    </div>
  );
};

export default FormComponent;
