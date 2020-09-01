import { Row, Col } from "react-bootstrap";
import Options from "./options";
import styles from "./styles/content.module.scss";

export default function Content({ children }) {
  return (
    <div className={"flex-grow-1 " + styles.container}>
      <Row className="h-100" noGutters>
        <Options />
        <Col className="flex-grow-1">{children}</Col>
      </Row>
    </div>
  );
}
