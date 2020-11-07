import { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import useDashboardContentRef from "../../hooks/useDashboardContentRef";
import Options from "./options";
import styles from "./styles/content.module.scss";
import { useEffect } from "react";

export default function Content({ children }) {
  const contentRef = useRef(null);
  const { setContentRef } = useDashboardContentRef();

  useEffect(() => {
    setContentRef(contentRef);
  }, []);

  return (
    <div className={"flex-grow-1 " + styles.container}>
      <Row className="h-100" noGutters>
        <Options />
        <Col className="flex-grow-1" ref={contentRef}>
          {children}
        </Col>
      </Row>
    </div>
  );
}
