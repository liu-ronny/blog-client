import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../general/logo";

export default function NavbarComponent() {
  return (
    <Navbar className="bg-primary-green text-white py-4">
      <Container className="justify-content-center">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </Container>
    </Navbar>
  );
}
