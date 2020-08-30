import { Spinner } from "react-bootstrap";
import styles from "./styles/loadingScreen.module.scss";

export default function LoadingScreen() {
  return (
    <div
      className={
        "d-flex justify-content-center align-items-center vh-100 " +
        styles.container
      }
    >
      <Spinner animation="border" role="status" variant="primary-green">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
