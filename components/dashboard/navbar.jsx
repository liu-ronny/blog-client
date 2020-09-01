import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/navbar.module.scss";

export default function NavbarComponent({ onLogout }) {
  return (
    <Navbar
      className={"bg-primary-green text-white py-4 px-5 " + styles.container}
      sticky="top"
    >
      <Navbar.Brand>Dashboard</Navbar.Brand>
      <Nav className="ml-auto">
        <Link href="/" passHref>
          <Nav.Link className="mr-2" target="_blank">
            <FontAwesomeIcon className="mr-1" icon={faHome} />
            <span>Home</span>
          </Nav.Link>
        </Link>
        <Link href="/" passHref>
          <Nav.Link onClick={onLogout}>
            <FontAwesomeIcon className="mr-1" icon={faSignOutAlt} />
            <span>Sign out</span>
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
