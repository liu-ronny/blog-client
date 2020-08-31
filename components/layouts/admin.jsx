import LogoNavbar from "../general/logoNavbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <LogoNavbar />
      {children}
    </>
  );
}
