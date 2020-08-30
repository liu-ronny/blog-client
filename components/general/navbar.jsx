import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
import styles from "./styles/navbar.module.scss";

export default function NavbarComponent({ className, onToggle }) {
  return (
    <Navbar className={"bg-primary-green text-white pt-4 " + styles.container}>
      <Container className="justify-content-end">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <Nav className="ml-auto">
          <Link href="/" passHref>
            <Nav.Link className={styles.slider}>BLOG</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link className={styles.slider}>ABOUT</Nav.Link>
          </Link>
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
