import LogoNavbar from "../general/logoNavbar";

export default function LoginLayout({ children }) {
  return (
    <>
      <LogoNavbar position="center" />
      {children}
    </>
  );
}
