import LogoNavbar from "../general/logoNavbar";

export default function LoginLayout({ children }) {
  return (
    <div>
      <LogoNavbar position="center" />
      {children}
    </div>
  );
}
