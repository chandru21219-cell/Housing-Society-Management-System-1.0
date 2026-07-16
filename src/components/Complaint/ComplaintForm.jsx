import { useState } from "react";
import { useSociety } from "../../context/SocietyContext";

function ComplaintForm() {
  const { residents, addComplaint } = useSociety();

  const [formData, setFormData] = useState({
    resident: "",
    type: "Electrical",
    description: "",
    status: "Open",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.resident || !formData.description) {
      alert("Please fill all required fields.");
      return;
    }

    addComplaint(formData);

    setFormData({
      resident: "",
      type: "Electrical",
      description: "",
      status: "Open",
    });
  };

  return (
    <div className="card">
      <h2>Complaint Management</h2>

      <form onSubmit={handleSubmit}>

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
              {resident.name}
            </option>
          ))}
        </select>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option>Electrical</option>
          <option>Plumbing</option>
          <option>Cleaning</option>
          <option>Security</option>
          <option>Other</option>
        </select>

        <textarea
          name="description"
          placeholder="Complaint Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Add Complaint
        </button>

      </form>
    </div>
  );
}

export default ComplaintForm;