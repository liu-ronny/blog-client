import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import { logout } from "../../api/users";
import useAuth from "../../hooks/useAuth";
import Navbar from "../dashboard/navbar";
import Content from "../dashboard/content";
import Spinner from "../general/spinner";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const { loading, authenticated, authError } = useAuth();

  useEffect(() => {
    if (!loading && authenticated) {
      setShowComponent(true);
      return;
    }

    if ((!loading && !authenticated) || authError) {
      router.replace("/");
    }
  }, [loading, authenticated, authError, router]);

  if (!showComponent) {
    return <Spinner />;
  }

  const handleLogout = async () => {
    setShowSpinner(true);

    await logout();

    const url = process.env.NEXT_PUBLIC_API_URL + "/sessions";
    mutate(url, { authenticated: false });

    setShowSpinner(false);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar onLogout={handleLogout} />
      {showSpinner ? <Spinner /> : <Content>{children}</Content>}
    </div>
  );
};

export default DashboardLayout;
