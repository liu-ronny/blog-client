import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faEdit,
  faUser,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./styles/options.module.scss";
import Link from "next/link";

export default function Options() {
  return (
    <Col className={"py-5 pr-5 " + styles.container} xs="auto">
      <div className="mb-5">
        <div className={"mb-3 " + styles.optionsHeader}>Blog</div>
        <div className={"mb-2 " + styles.option}>
          <FontAwesomeIcon className="mr-2" icon={faEdit} fixedWidth />
          <span>Posts</span>
        </div>
        <div className={styles.option}>
          <FontAwesomeIcon className="mr-2" icon={faUser} fixedWidth />
          <span>Account</span>
        </div>
      </div>
      <div>
        <div className={"mb-3 " + styles.optionsHeader}>Activity</div>
        <div className={"mb-2 " + styles.option}>
          <FontAwesomeIcon className="mr-2" icon={faChartBar} fixedWidth />
          <span>Metrics</span>
        </div>
        <div className={styles.option}>
          <FontAwesomeIcon className="mr-2" icon={faShieldAlt} fixedWidth />
          <span>Security</span>
        </div>
      </div>
    </Col>
  );
}
