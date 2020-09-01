import Link from "next/link";
import { Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faEdit,
  faUser,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./styles/options.module.scss";

export default function Options() {
  return (
    <Col className={"border-right " + styles.container} xs="auto">
      <Nav className="flex-column sticky-top p-5">
        <div className="mb-5">
          <Nav.Item className={styles.header}>Blogs</Nav.Item>
          <Link href="/admin/dashboard/posts" passHref>
            <Nav.Link className={styles.option}>
              <FontAwesomeIcon className="mr-2" icon={faEdit} fixedWidth />
              <span>Posts</span>
            </Nav.Link>
          </Link>
          <Link href="/admin/dashboard/account" passHref>
            <Nav.Link className={styles.option}>
              <FontAwesomeIcon className="mr-2" icon={faUser} fixedWidth />
              <span>Account</span>
            </Nav.Link>
          </Link>
        </div>

        <div>
          <Nav.Item className={styles.header}>Activity</Nav.Item>
          <Nav.Link className={styles.option}>
            <FontAwesomeIcon className="mr-2" icon={faChartBar} fixedWidth />
            <span>Metrics</span>
          </Nav.Link>
          <Nav.Link className={styles.option}>
            <FontAwesomeIcon className="mr-2" icon={faShieldAlt} fixedWidth />
            <span>Security</span>
          </Nav.Link>
        </div>
      </Nav>

      {/* <div className="mb-5">
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
      </div> */}
    </Col>
  );
}
