import { Container } from "react-bootstrap";
import classnames from "classnames";
import styles from "./styles/content.module.scss";

export default function Content({ className, children }) {
  const containerClassNames = classnames(
    "shadow",
    "p-5",
    styles.container,
    className
  );

  return <Container className={containerClassNames}>{children}</Container>;
}
