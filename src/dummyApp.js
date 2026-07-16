import { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AddResident from "./components/AddResident";
import ResidentList from "./components/ResidentList";
import MaintenanceBills from "./components/MaintenanceBills";
import './App.css';

function App() {
  const [residents, setResidents] = useState(() => {
    const savedResidents = localStorage.getItem("residents");

    return savedResidents
      ? JSON.parse(savedResidents)
      : [];
  });

  const [bills, setBills] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [editingResident, setEditingResident] = useState(null);

  const addResident = (resident) => {
    setResidents([...residents, resident]);
  };
  const deleteResident = (id) => {
  setResidents(
    residents.filter(
      (resident) => resident.id !== id
    )
  );
};

const updateResident = (updatedResident) => {
  setResidents(
    residents.map((resident) =>
      resident.id === updatedResident.id
        ? updatedResident
        : resident
    )
  );

  setEditingResident(null);
};

useEffect(() => {
  localStorage.setItem(
    "residents",
    JSON.stringify(residents)
  );
}, [residents]);

  return (
    <>
      <Header />
      <div className="container">
        <Dashboard
  residents={residents}
  bills={bills}
/>
        <AddResident
  addResident={addResident}
  editingResident={editingResident}
  updateResident={updateResident}
/>
        <ResidentList
  residents={residents}
  deleteResident={deleteResident}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  setEditingResident={setEditingResident}
/>

<MaintenanceBills
  residents={residents}
  bills={bills}
  setBills={setBills}
/>

      </div>
      {/* <div className="container">
        <h2>Dashboard</h2>
      </div> */}
    </>
  );
}

export default App;
