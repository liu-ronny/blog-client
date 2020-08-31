import AdminLayout from "../../components/layouts/admin";
import withRouteProtection from "../../components/hoc/withRouteProtection";

const Dashboard = () => {
  return (
    <>
      <div>hi</div>
    </>
  );
};

const ProtectedDashboard = withRouteProtection(Dashboard, {
  redirectIf: "loggedOut",
  redirectTo: "/",
});

ProtectedDashboard.layout = AdminLayout;

export default ProtectedDashboard;
