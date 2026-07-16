import { useSociety } from "../context/SocietyContext";

function Bills() {
  const { residents, bills, setBills } = useSociety();

  const generateBills = () => {
    if (residents.length === 0) {
      alert("Please add residents first.");
      return;
    }

    const currentMonth = new Date().toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    // Prevent duplicate bills
    const alreadyGenerated = bills.some(
      (bill) => bill.month === currentMonth
    );

    if (alreadyGenerated) {
      alert(`Bills for ${currentMonth} have already been generated.`);
      return;
    }

    const newBills = residents.map((resident, index) => ({
      id: Date.now() + index,

      billNo: `BILL-${new Date().getFullYear()}${String(
        new Date().getMonth() + 1
      ).padStart(2, "0")}-${String(index + 1).padStart(3, "0")}`,

      flatNo: resident.flatNo,

      residentName: resident.name,

      month: currentMonth,

      amount: resident.maintenanceAmount,

      dueDate: "10-" + currentMonth,

      status: "Pending",

      paymentDate: "",

      paymentMode: "",

      transactionId: "",
    }));

    setBills([...bills, ...newBills]);
  };

  const markAsPaid = (id) => {
    const updatedBills = bills.map((bill) => {
      if (bill.id === id) {
        return {
          ...bill,
          status: "Paid",
          paymentDate: new Date().toLocaleDateString("en-IN"),
          paymentMode: "Cash",
        };
      }

      return bill;
    });

    setBills(updatedBills);
  };

  return (
    <div className="form-container">
      <h2>Maintenance Bills</h2>

      <button className="btn btn-primary" onClick={generateBills}>
        Generate Monthly Bills
      </button>

      <p>
        Total Bills Generated: <strong>{bills.length}</strong>
      </p>

      {bills.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Bill No</th>
              <th>Flat</th>
              <th>Resident</th>
              <th>Month</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.billNo}</td>
                <td>{bill.flatNo}</td>
                <td>{bill.residentName}</td>
                <td>{bill.month}</td>
                <td>{bill.dueDate}</td>
                <td>
                  ₹{bill.amount.toLocaleString("en-IN")}
                </td>
                <td>
                  <span
                    className={`status ${
                      bill.status === "Paid"
                        ? "paid"
                        : "pending"
                    }`}
                  >
                    {bill.status}
                  </span>
                </td>

                <td>
                  {bill.status === "Pending" ? (
                    <button className="btn btn-success"
                      onClick={() => markAsPaid(bill.id)}
                    >
                      Pay
                    </button>
                  ) : (
                    <span>✅ Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Bills;