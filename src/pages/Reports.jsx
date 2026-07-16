import ReportCards from "../components/reports/ReportCards";
import { useSociety } from "../context/SocietyContext";

function Reports() {
  const { residents, bills, parkingSlots, } = useSociety();

  const totalResidents = residents.length;

  const totalFlats = new Set(
    residents.map((resident) => resident.flatNo)
  ).size;

  const totalBills = bills.length;

  const paidBills = bills.filter(
    (bill) => bill.status === "Paid"
  ).length;

  const pendingBills = bills.filter(
    (bill) => bill.status === "Pending"
  ).length;

  const totalCollection = bills
    .filter((bill) => bill.status === "Paid")
    .reduce((sum, bill) => sum + bill.amount, 0);
  
  const totalParking = parkingSlots.length;

const occupiedParking = parkingSlots.filter(
  (slot) => slot.status === "Occupied"
).length;

const availableParking = parkingSlots.filter(
  (slot) => slot.status === "Available"
).length;  

  const pendingCollection = bills
    .filter((bill) => bill.status === "Pending")
    .reduce((sum, bill) => sum + bill.amount, 0);

  return (
  <>
    <h2>📊 Society Reports</h2>

    <ReportCards
  totalResidents={totalResidents}
  totalFlats={totalFlats}
  totalBills={totalBills}
  paidBills={paidBills}
  pendingBills={pendingBills}
  totalCollection={totalCollection}
  pendingCollection={pendingCollection}
  totalParking={totalParking}
  occupiedParking={occupiedParking}
  availableParking={availableParking}
/>
  </>
);
}

export default Reports;