import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/navbar.module.scss";

export default function NavbarComponent({ onToggle }) {
  return (
    <Navbar className={"bg-primary-green text-white py-3 " + styles.navbar}>
      <Container className="justify-content-end">
        <Navbar.Brand className="mr-auto" href="#">
          <span className="align-top">ronny</span>
          <span className={styles.divider}>
            <FontAwesomeIcon icon={faSlash} rotation={90} />
          </span>
          <span className="align-bottom">liu</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link className={styles.slider}>HELLO</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.slider}>WORLD</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.slider}>TESTING</Nav.Link>
          </Nav.Item>
          <Nav.Item
            className={"ml-4 px-2 " + styles.toggler}
            onClick={onToggle}
          >
            <div className={"d-flex h-100 align-items-center"}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
