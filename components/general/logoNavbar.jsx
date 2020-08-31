import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
import classnames from "classnames";
import Logo from "./logo";

export default function LogoNavbar({ position = "left" }) {
  const containerClassNames = classnames({
    "text-left": position === "left",
    "text-center": position === "center",
    "text-right": position === "right",
  });

  return (
    <Navbar className="bg-primary-green py-4">
      <Container className={containerClassNames}>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </Container>
    </Navbar>
  );
}
