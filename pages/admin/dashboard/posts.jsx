import DashboardLayout from "../../../components/layouts/dashboard";
import Posts from "../../../components/dashboard/posts";
import withRouteProtection from "../../../components/hoc/withRouteProtection";

const Dashboard = () => {
  return <Posts />;
};

const ProtectedDashboard = withRouteProtection(Dashboard, {
  redirectIf: "loggedOut",
  redirectTo: "/",
});

ProtectedDashboard.layout = DashboardLayout;

export default ProtectedDashboard;
