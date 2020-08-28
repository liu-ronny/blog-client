import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import classnames from "classnames";
import styles from "./styles/meta.module.scss";
import { Row, Col } from "react-bootstrap";

export default function Meta({ center, blog }) {
  const classNames = classnames("my-2", "text-muted", "small", {
    "justify-content-center": center,
  });

  return (
    <Row className={classNames} noGutters>
      <Col xs="auto">
        <FontAwesomeIcon icon={faFeatherAlt} size="xs" />
        <span className="ml-2">{blog.author.name}</span>
        <span className="mx-2">/</span>
      </Col>
      <Col xs="auto">
        <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} size="xs" />
        <span>
          {blog.date.month} {blog.date.day}, {blog.date.year}
        </span>
      </Col>
      <Col xs="auto">
        <span>
          {blog.tags ? (
            <>
              <span className="mx-2">/</span>
              <FontAwesomeIcon className="mr-2" icon={faTags} size="xs" />
              {blog.tags.map((tag) => {
                return (
                  <a
                    key={tag}
                    className={"mr-2 text-muted " + styles.tag}
                    href="#"
                  >
                    {tag}
                  </a>
                );
              })}
            </>
          ) : null}
        </span>
      </Col>
    </Row>
  );
}
