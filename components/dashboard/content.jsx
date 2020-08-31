import { Row, Col } from "react-bootstrap";
import Options from "./options";
import styles from "./styles/content.module.scss";

export default function Content({ children }) {
  return (
    <div className={"flex-grow-1 px-5 " + styles.container}>
      <Row className="h-100">
        <Options />
        <Col className="flex-grow-1 py-5 pl-5">{children}</Col>
      </Row>
    </div>
  );
}
