import { useContext } from "react";
import { DashboardContentContext } from "../contexts/dashboardContent";

export default function useDashboardContentRef() {
  const context = useContext(DashboardContentContext);
  return context;
}
