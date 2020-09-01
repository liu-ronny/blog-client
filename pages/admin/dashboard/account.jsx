import DashboardLayout from "../../../components/layouts/dashboard";
import withRouteProtection from "../../../components/hoc/withRouteProtection";
import Spinner from "../../../components/dashboard/spinner";

const Dashboard = () => {
  return <div>account hello</div>;
};

const ProtectedDashboard = withRouteProtection(Dashboard, {
  redirectIf: "loggedOut",
  redirectTo: "/",
  SpinnerComponent: Spinner,
});

ProtectedDashboard.layout = DashboardLayout;

export default ProtectedDashboard;
