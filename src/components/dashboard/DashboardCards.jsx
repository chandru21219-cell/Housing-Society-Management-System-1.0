function DashboardCards({
  residents = [],
  bills = [],
  parkingSlots = [],
}) {
  const totalResidents = residents.length;

  const totalFlats = new Set(
    residents.map((r) => r.flatNo)
  ).size;

  const totalCollected = bills
    .filter((bill) => bill.status === "Paid")
    .reduce((sum, bill) => sum + bill.amount, 0);

  const pendingAmount = bills
    .filter((bill) => bill.status === "Pending")
    .reduce((sum, bill) => sum + bill.amount, 0);

  const paidBills = bills.filter(
    (bill) => bill.status === "Paid"
  ).length;

  const totalParking = parkingSlots.length;

  const occupiedParking = parkingSlots.filter(
    (slot) => slot.status === "Occupied"
  ).length;

  const availableParking = parkingSlots.filter(
    (slot) => slot.status === "Available"
  ).length;

  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>
        🏢 Housing Society Management Dashboard
      </h2>

      <div className="dashboard">

        <div className="card">
          <h3>👨 Residents</h3>
          <p>{totalResidents}</p>
        </div>

        <div className="card">
          <h3>🏢 Flats</h3>
          <p>{totalFlats}</p>
        </div>

        <div className="card">
          <h3>💰 Collection</h3>
          <p>₹{totalCollected.toLocaleString("en-IN")}</p>
        </div>

        <div className="card">
          <h3>⏳ Pending</h3>
          <p>₹{pendingAmount.toLocaleString("en-IN")}</p>
        </div>

        <div className="card">
          <h3>📄 Bills</h3>
          <p>{bills.length}</p>
        </div>

        <div className="card">
          <h3>✔ Paid Bills</h3>
          <p>{paidBills}</p>
        </div>

        <div className="card">
          <h3>🚗 Parking Slots</h3>
          <p>{totalParking}</p>
        </div>

        <div className="card">
          <h3>🅿 Occupied</h3>
          <p>{occupiedParking}</p>
        </div>

        <div className="card">
          <h3>✅ Available</h3>
          <p>{availableParking}</p>
        </div>

      </div>
    </>
  );
}

export default DashboardCards;