import { useSociety } from "../context/SocietyContext";

function Payments() {
  const { bills } = useSociety();

  return (
    <div className="form-container">
      <h2>Payment History</h2>

      {bills.length === 0 ? (
        <p>No payments available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Bill No</th>
              <th>Flat</th>
              <th>Resident</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment Date</th>
              <th>Payment Mode</th>
            </tr>
          </thead>

          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.billNo}</td>
                <td>{bill.flatNo}</td>
                <td>{bill.residentName}</td>
                <td>₹{bill.amount.toLocaleString("en-IN")}</td>
                <td>{bill.status}</td>
                <td>{bill.paymentDate || "-"}</td>
                <td>{bill.paymentMode || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Payments;