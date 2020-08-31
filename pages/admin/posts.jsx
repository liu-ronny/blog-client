import AdminLayout from "../../components/layouts/admin";
import Posts from "../../components/dashboard/posts/posts";
import withRouteProtection from "../../components/hoc/withRouteProtection";

const Dashboard = () => {
  return <Posts />;
};

const ProtectedDashboard = withRouteProtection(Dashboard, {
  redirectIf: "loggedOut",
  redirectTo: "/",
});

ProtectedDashboard.layout = AdminLayout;

export default ProtectedDashboard;
