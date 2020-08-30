import withRouteProtection from "../../components/hoc/withRouteProtection";

const Dashboard = () => {
  return <div>hi</div>;
};

export default withRouteProtection(Dashboard, {
  redirectIf: "loggedOut",
  redirectTo: "/",
});
