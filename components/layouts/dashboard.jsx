import Head from "next/head";
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
  const { loading, authenticated, authError } = useAuth();

  useEffect(() => {
    if (!loading && authenticated) {
      setTimeout(() => setShowComponent(true), 1000);
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
    await logout();

    const url = process.env.NEXT_PUBLIC_API_URL + "/sessions";
    mutate(url, { authenticated: false });

    router.replace("/");
  };

  return (
    <div className="d-flex flex-column vh-100 bg-white">
      <Head>
        <title>Dashboard | Ronny Liu</title>
      </Head>
      <Navbar onLogout={handleLogout} />
      <Content>{children}</Content>
    </div>
  );
};

export default DashboardLayout;
