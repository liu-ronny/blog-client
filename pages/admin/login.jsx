import { useRouter } from "next/router";
import { useState } from "react";
import { Container } from "react-bootstrap";
import withRouteProtection from "../../components/hoc/withRouteProtection";
import Navbar from "../../components/login/navbar";
import Form from "../../components/login/form";
import { login } from "../../api/users";
import styles from "../../styles/admin/login.module.scss";

const Login = () => {
  const router = useRouter();
  const [authenticating, setAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (username, password) => {
    setErrorMessage("");

    setAuthenticating(true);
    const { authenticated, error } = await login(username, password);
    setAuthenticating(false);

    if (authenticated) {
      router.replace("/admin/dashboard");
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <>
      <Navbar />
      <Container
        className={"d-flex justify-content-center " + styles.container}
      >
        <Form
          onSubmit={handleSubmit}
          errorMessage={errorMessage}
          authenticating={authenticating}
        />
      </Container>
    </>
  );
};

export default withRouteProtection(Login, {
  redirectIf: "loggedIn",
  redirectTo: "/admin/dashboard",
});
