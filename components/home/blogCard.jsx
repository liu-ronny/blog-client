import Link from "next/link";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Meta from "../general/meta";
import styles from "./styles/blogCard.module.scss";

export default function blogCard({ className, blog }) {
  return (
    <Row className={"justify-content-center " + className}>
      <Col className={"d-none d-lg-block " + styles.date} md="auto">
        <div className={styles.day}>{blog.date.day}</div>
        <div className={styles.month}>{blog.date.month}</div>
        <FontAwesomeIcon
          className={styles.dateDividerIcon}
          icon={faCircle}
          size="xs"
        />
      </Col>
      <Col className={"pl-5 " + styles.text} xs={12} lg={8} xl={7}>
        <div className={styles.title}>{blog.title}</div>
        <Meta blog={blog} />
        <p className={styles.body}>{blog.previewText}</p>
        <Link href={`/blog/${blog.slug}`} passHref>
          <Button className={styles.button} variant="outline-primary-green">
            Continue Reading
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
