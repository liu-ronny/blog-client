import DashboardLayout from "../../../components/layouts/dashboard";
import withRouteProtection from "../../../components/hoc/withRouteProtection";

const Dashboard = () => {
  return <div>account hello</div>;
};

const ProtectedDashboard = withRouteProtection(Dashboard, {
  redirectIf: "loggedOut",
  redirectTo: "/",
});

ProtectedDashboard.layout = DashboardLayout;

export default ProtectedDashboard;
