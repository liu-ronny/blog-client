import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { AuthProvider } from "../contexts/auth";

// Fix issue where markup for icons loads before the styles are applied
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "../styles/bootstrap.scss";
import "react-placeholder/lib/reactPlaceholder.css";
import "../styles/globals.scss";
// import Dashboard from "../components/dashboard/page";

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/styles/nprogress.css" />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
    // <Dashboard />
  );
}

export default MyApp;
