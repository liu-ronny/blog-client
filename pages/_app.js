import { AuthProvider } from "../contexts/auth";
import "../styles/bootstrap.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
