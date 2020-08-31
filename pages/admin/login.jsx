import { useRouter } from "next/router";
import { useState } from "react";
import { mutate } from "swr";
import { login } from "../../api/users";
import { Container } from "react-bootstrap";
import withRouteProtection from "../../components/hoc/withRouteProtection";
import LoginLayout from "../../components/layouts/login";
import Form from "../../components/login/form";
import styles from "../../styles/admin/login.module.scss";

const Login = () => {
  const router = useRouter();
  const [authenticating, setAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (username, password) => {
    setErrorMessage("");
    setAuthenticating(true);

    const { authenticated, error } = await login(username, password);

    const url = process.env.NEXT_PUBLIC_API_URL + "/sessions";
    mutate(url);

    if (authenticated) {
      router.push("/admin/dashboard/posts");
    } else {
      setErrorMessage(error);
      setAuthenticating(false);
    }
  };

  return (
    <>
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

const ProtectedLogin = withRouteProtection(Login, {
  redirectIf: "loggedIn",
  redirectTo: "/admin/dashboard/posts",
});

ProtectedLogin.layout = LoginLayout;

export default ProtectedLogin;
