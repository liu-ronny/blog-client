import { useEffect, useState } from "react";
import { mutate } from "swr";
import Navbar from "../../components/dashboard/navbar";
import Content from "../../components/dashboard/content";
import Spinner from "../../components/general/spinner";
import { logout } from "../../api/users";

const AdminLayout = ({ children }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleLogout = async () => {
    setShowSpinner(true);

    await logout();

    const url = process.env.NEXT_PUBLIC_API_URL + "/sessions";
    mutate(url, { authenticated: false });

    setShowSpinner(false);
  };

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
  }, []);

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar onLogout={handleLogout} />
      {showSpinner ? <Spinner /> : <Content>{children}</Content>}
    </div>
  );
};

export default AdminLayout;
