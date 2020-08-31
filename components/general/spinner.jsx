import { Spinner } from "react-bootstrap";
import styles from "./styles/spinner.module.scss";

export default function SpinnerComponent() {
  return (
    <div className={styles.container}>
      <Spinner animation="border" role="status" variant="primary-green">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
