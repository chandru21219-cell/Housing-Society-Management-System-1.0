function ReportCards({
  totalResidents,
  totalFlats,
  totalBills,
  paidBills,
  pendingBills,
  totalCollection,
  pendingCollection,
}) {
  const reports = [
    {
      title: "👥 Residents",
      value: totalResidents,
    },
    {
      title: "🏢 Flats",
      value: totalFlats,
    },
    {
      title: "📄 Bills",
      value: totalBills,
    },
    {
      title: "✔ Paid Bills",
      value: paidBills,
    },
    {
      title: "⏳ Pending Bills",
      value: pendingBills,
    },
    {
      title: "💰 Collection",
      value: `₹${totalCollection.toLocaleString("en-IN")}`,
    },
    {
      title: "⚠ Pending",
      value: `₹${pendingCollection.toLocaleString("en-IN")}`,
    },
  ];

  return (
    <div className="dashboard">
      {reports.map((report, index) => (
        <div className="card" key={index}>
          <h3>{report.title}</h3>
          <p>{report.value}</p>
        </div>
      ))}
    </div>
  );
}

export default ReportCards;