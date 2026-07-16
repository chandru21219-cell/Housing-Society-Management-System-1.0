import { useSociety } from "../../context/SocietyContext";

function ParkingTable() {
  const {
  parkingSlots,
  deleteParkingSlot,
  setEditingParking,
} = useSociety();

  return (
    <div className="card">
      <h2>Parking Slots</h2>

      <table>
        <thead>
          <tr>
            <th>Slot</th>
            <th>Resident</th>
            <th>Vehicle</th>
            <th>Vehicle No</th>
            <th>Fee</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {parkingSlots.length === 0 ? (
            <tr>
              <td colSpan="7">
                No Parking Slots Added
              </td>
            </tr>
          ) : (
            parkingSlots.map((slot) => (
              <tr key={slot.id}>
                <td>{slot.slotNumber}</td>
                <td>{slot.resident}</td>
                <td>{slot.vehicleType}</td>
                <td>{slot.vehicleNumber}</td>
                <td>₹{slot.parkingFee}</td>
                <td>{slot.status}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      setEditingParking(slot)
                    }
                  >
                    Edit
                  </button>
                
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteParkingSlot(slot.id)
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

export default ParkingTable;