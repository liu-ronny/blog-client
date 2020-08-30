import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import LoadingScreen from "../general/loadingScreen";

/* eslint-disable */
export default function withRouteProtection(Component, pageProps) {
  return () => {
    const { redirectIf, redirectTo, ...props } = pageProps;
    const { loading, authenticated, authError } = useAuth();
    const router = useRouter();

    if (redirectIf === "loggedOut") {
      console.log("on /admin/dashboard");
      console.log(
        `loading: ${loading}, authenticated: ${authenticated}, authError: ${authError}`
      );
    }

    const redirectAuthenticatedUser =
      !loading && authenticated && redirectIf === "loggedIn";
    const redirectUnauthorizedUser =
      !loading && !authenticated && redirectIf === "loggedOut";

    useEffect(() => {
      if (redirectAuthenticatedUser || redirectUnauthorizedUser) {
        console.log(
          "redirecting authenticated user",
          redirectAuthenticatedUser
        );
        console.log("redirecting unauthorized user", redirectUnauthorizedUser);
        router.replace(redirectTo);
      }

      if (authError) {
        router.replace("/");
      }
    }, [
      redirectAuthenticatedUser,
      redirectUnauthorizedUser,
      authError,
      router,
    ]);

    if (
      loading ||
      redirectAuthenticatedUser ||
      redirectUnauthorizedUser ||
      authError
    ) {
      return <LoadingScreen />;
    }

    return <Component {...props} />;
  };
}
/* eslint-enable */
