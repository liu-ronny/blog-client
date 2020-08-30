import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/logo.module.scss";

export default function Logo({ href }) {
  const attributes = {};

  if (href) {
    attributes.href = href;
  }

  return (
    <Navbar.Brand className="mr-auto" {...attributes}>
      <span className="align-top">ronny</span>
      <span className={styles.divider}>
        <FontAwesomeIcon icon={faSlash} rotation={90} />
      </span>
      <span className="align-bottom">liu</span>
    </Navbar.Brand>
  );
}
