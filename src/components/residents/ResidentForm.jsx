import { useState, useEffect } from "react";
import { useSociety } from "../../context/SocietyContext";

function ResidentForm() {
  const {
  addResident,
  updateResident,
  editingResident,
  setEditingResident,
} = useSociety();
console.log("editingResident:", editingResident);

  const [formData, setFormData] = useState({
    name: "",
    flatNo: "",
    phone: "",
    email: "",
    maintenanceAmount: "",
  });

  useEffect(() => {
  if (editingResident) {
    setFormData({
      name: editingResident.name,
      flatNo: editingResident.flatNo,
      phone: editingResident.phone,
      email: editingResident.email,
      maintenanceAmount:
        editingResident.maintenanceAmount,
    });
  }
}, [editingResident]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      flatNo,
      phone,
      email,
      maintenanceAmount,
    } = formData;

    if (
  !name.trim() ||
  !flatNo.trim() ||
  !phone.trim() ||
  !email.trim() ||
  !maintenanceAmount
) {
      alert("Please fill all fields.");
      return;
    }

    const residentData = {
  id: editingResident
    ? editingResident.id
    : Date.now(),
  ...formData,
  maintenanceAmount: Number(maintenanceAmount),
};

if (editingResident) {
  updateResident(residentData);
  setEditingResident(null);
} else {
  addResident(residentData);
}

    setFormData({
      name: "",
      flatNo: "",
      phone: "",
      email: "",
      maintenanceAmount: "",
    });
  };
  

  return (
    <div className="form-container">
      <h2>Add Resident</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Resident Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="flatNo"
          placeholder="Flat Number"
          value={formData.flatNo}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="maintenanceAmount"
          type="number"
          placeholder="Monthly Maintenance"
          value={formData.maintenanceAmount}
          onChange={handleChange}
        />

        <button type="submit">
  {editingResident
    ? "Update Resident"
    : "Add Resident"}
</button>
      </form>
    </div>
  );
}

export default ResidentForm;