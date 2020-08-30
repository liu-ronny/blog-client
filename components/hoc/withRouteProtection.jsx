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

    const redirectAuthenticatedUser =
      authenticated && redirectIf === "loggedIn";
    const redirectUnauthorizedUser =
      !authenticated && redirectIf === "loggedOut";

    useEffect(() => {
      if (redirectAuthenticatedUser || redirectUnauthorizedUser) {
        router.replace(redirectTo);
      }

      if (authError) {
        router.replace("/");
      }
    }, [
      loading,
      redirectAuthenticatedUser,
      redirectUnauthorizedUser,
      authError,
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
