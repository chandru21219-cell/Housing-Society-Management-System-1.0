import { useSociety } from "../../context/SocietyContext";
import { useState, useEffect } from "react";

function ParkingForm() {
  const [formData, setFormData] = useState({
    slotNumber: "",
    resident: "",
    vehicleType: "Car",
    vehicleNumber: "",
    parkingFee: "",
    status: "Occupied",
  });

  const {
  residents,
  addParkingSlot,
  updateParkingSlot,
  editingParking,
  setEditingParking,
} = useSociety();

useEffect(() => {
  if (editingParking) {
    setFormData(editingParking);
  }
}, [editingParking]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.slotNumber ||
    !formData.resident ||
    !formData.vehicleNumber
  ) {
    alert("Please fill all required fields.");
    return;
  }

  if (editingParking) {
    updateParkingSlot({
      ...editingParking,
      ...formData,
    });

    setEditingParking(null);
  } else {
    addParkingSlot(formData);
  }

  setFormData({
    slotNumber: "",
    resident: "",
    vehicleType: "Car",
    vehicleNumber: "",
    parkingFee: "",
    status: "Occupied",
  });
};

  return (
    <div className="card">
      <h2>
  {editingParking
    ? "Edit Parking Slot"
    : "Add Parking Slot"}
</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="slotNumber"
          placeholder="Slot Number"
          value={formData.slotNumber}
          onChange={handleChange}
        />

                <select
          name="resident"
          value={formData.resident}
          onChange={handleChange}
        >
          <option value="">Select Resident</option>
        
          {residents.map((resident) => (
            <option
              key={resident.id}
              value={resident.name}
            >
              {resident.name} (Flat {resident.flatNo})
            </option>
          ))}
        </select>

        <select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
        >
          <option>Car</option>
          <option>Bike</option>
        </select>

        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={formData.vehicleNumber}
          onChange={handleChange}
        />

        <input
          type="number"
          name="parkingFee"
          placeholder="Monthly Parking Fee"
          value={formData.parkingFee}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Occupied</option>
          <option>Available</option>
        </select>

        <button className="btn btn-primary">
  {editingParking ? "Update Parking" : "Add Parking"}
</button>
      </form>
    </div>
  );
}

export default ParkingForm;