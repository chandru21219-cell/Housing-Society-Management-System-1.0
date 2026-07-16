import { useContext } from "react";
import SocietyContext from "../context/SocietyContext";
import DashboardCards from "../components/dashboard/DashboardCards";

function Dashboard() {
  const { residents, bills, parkingSlots } =
    useContext(SocietyContext);

  return (
    <DashboardCards
      residents={residents}
      bills={bills}
      parkingSlots={parkingSlots}
    />
  );
}

export default Dashboard;