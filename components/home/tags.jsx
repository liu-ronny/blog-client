import { Form, Col, Button } from "react-bootstrap";
import styles from "./styles/tags.module.scss";

export default function Tags(props) {
  return (
    <Form.Row className={"justify-content-center " + styles.container}>
      <Col xs="auto">
        <Button className={styles.tag} variant="outline-primary-green">
          doggo
        </Button>
      </Col>
      <Col xs="auto">
        <Button className={styles.tag} variant="outline-primary-green">
          doggy
        </Button>
      </Col>
      <Col xs="auto">
        <Button className={styles.tag} variant="outline-primary-green">
          dog
        </Button>
      </Col>
      <Col xs="auto">
        <Button className={styles.tag} variant="outline-primary-green">
          woof
        </Button>
      </Col>
    </Form.Row>
  );
}
