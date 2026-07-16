import { useSociety } from "../../context/SocietyContext";

function ComplaintTable() {
  const {
    complaints,
    deleteComplaint,
  } = useSociety();

  return (
    <div className="card">
      <h2>Complaints</h2>

      <table>
        <thead>
          <tr>
            <th>Resident</th>
            <th>Type</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {complaints.length === 0 ? (
            <tr>
              <td colSpan="5">
                No Complaints Found
              </td>
            </tr>
          ) : (
            complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.resident}</td>
                <td>{complaint.type}</td>
                <td>{complaint.description}</td>
                <td>{complaint.status}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteComplaint(complaint.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ComplaintTable;