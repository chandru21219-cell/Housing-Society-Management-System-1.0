import { useSociety } from "../../context/SocietyContext";

function ResidentTable() {
  const {
  residents,
  deleteResident,
  searchTerm,
  setSearchTerm,
  setEditingResident,
} = useSociety();
  
  console.log("Residents:", residents);
console.log("Search Term:", searchTerm);

  const filteredResidents = residents.filter((resident) => {
  const search = searchTerm.toLowerCase();

  return (
    String(resident.name || "")
      .toLowerCase()
      .includes(search) ||
    String(resident.flatNo || "")
      .toLowerCase()
      .includes(search) ||
    String(resident.phone || "")
      .includes(searchTerm) ||
    String(resident.email || "")
      .toLowerCase()
      .includes(search)
  );
});
  

  return (
    <div className="resident-list">
      <h2>Residents</h2>

      <input
        type="text"
        placeholder="Search by Name, Flat No, Phone or Email"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="search-input"
      />

      {filteredResidents.length === 0 ? (
        <p>No residents found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Flat</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Maintenance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredResidents.map((resident) => (
              <tr key={resident.id}>
                <td>{resident.flatNo}</td>
                <td>{resident.name}</td>
                <td>{resident.phone}</td>
                <td>{resident.email}</td>
                <td>
                    ₹{(resident.maintenanceAmount || 0).toLocaleString("en-IN")}
                </td>

                <td>
                  <button className="btn btn-warning"
                    onClick={() => setEditingResident(resident)}
                  >
                    Edit
                  </button>

                  {" "}

                  <button className="btn btn-danger"
                    onClick={() => {
                      if (window.confirm("Delete this resident?")) {
                        deleteResident(resident.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ResidentTable;