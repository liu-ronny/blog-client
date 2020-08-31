import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import Spinner from "../general/spinner";

/* eslint-disable */
export default function withRouteProtection(Component, pageProps) {
  return () => {
    const { redirectIf, redirectTo, ...props } = pageProps;
    const { loading, authenticated, authError } = useAuth();
    const router = useRouter();

    const [showSpinner, setShowSpinner] = useState(true);

    const redirectAuthenticatedUser =
      !loading && authenticated && redirectIf === "loggedIn";
    const redirectUnauthorizedUser =
      !loading && !authenticated && redirectIf === "loggedOut";
    const redirect = redirectAuthenticatedUser || redirectUnauthorizedUser;

    useEffect(() => {
      if (redirect) {
        router.replace(redirectTo);
      }

      if (authError) {
        router.replace("/");
      }
    }, [redirect, redirectTo, authError, router]);

    useEffect(() => {
      if (!loading && !redirect && !authError) {
        setTimeout(() => setShowSpinner(false), 1000);
      }
    }, [loading, redirect, authError]);

    if (showSpinner) {
      return <Spinner />;
    }

    return <Component {...props} />;
  };
}
/* eslint-enable */
