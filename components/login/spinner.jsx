import { Spinner } from "react-bootstrap";
import styles from "./styles/spinner.module.scss";

export default function FormLoader() {
  return (
    <div
      className={
        "d-flex justify-content-center align-items-center rounded " +
        styles.container
      }
    >
      <Spinner animation="border" role="status" variant="primary-green">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
