import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const SocietyContext = createContext();

export function SocietyProvider({ children }) {
  // Residents
  const [residents, setResidents] = useState(() => {
    const savedResidents = localStorage.getItem("residents");
    return savedResidents ? JSON.parse(savedResidents) : [];
  });

  // Bills
  const [bills, setBills] = useState(() => {
    const savedBills = localStorage.getItem("bills");
    return savedBills ? JSON.parse(savedBills) : [];
  });

  // Parking
  const [parkingSlots, setParkingSlots] = useState(() => {
    const savedParking = localStorage.getItem("parkingSlots");
    return savedParking ? JSON.parse(savedParking) : [];
  });

  // Complaints
const [complaints, setComplaints] = useState(() => {
  const savedComplaints = localStorage.getItem("complaints");
  return savedComplaints ? JSON.parse(savedComplaints) : [];
});

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Edit Resident
  const [editingResident, setEditingResident] = useState(null);

  // Save Residents
  useEffect(() => {
    localStorage.setItem(
      "residents",
      JSON.stringify(residents)
    );
  }, [residents]);

  // Save Bills
  useEffect(() => {
    localStorage.setItem(
      "bills",
      JSON.stringify(bills)
    );
  }, [bills]);

  // Save Parking
  useEffect(() => {
    localStorage.setItem(
      "parkingSlots",
      JSON.stringify(parkingSlots)
    );
  }, [parkingSlots]);

  // Add Resident
  const addResident = (resident) => {
    const flatExists = residents.some(
      (r) =>
        r.flatNo.toLowerCase() ===
        resident.flatNo.toLowerCase()
    );

    if (flatExists) {
      alert("Flat number already exists.");
      return;
    }

    setResidents((prev) => [...prev, resident]);
  };

  // Update Resident
  const updateResident = (updatedResident) => {
    setResidents((prev) =>
      prev.map((resident) =>
        resident.id === updatedResident.id
          ? updatedResident
          : resident
      )
    );
  };

  // Delete Resident
  const deleteResident = (id) => {
    setResidents((prev) =>
      prev.filter((resident) => resident.id !== id)
    );
  };

  // Add Parking Slot
  const addParkingSlot = (parkingData) => {
    setParkingSlots((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...parkingData,
      },
    ]);
  };

  const deleteParkingSlot = (id) => {
  setParkingSlots((prev) =>
    prev.filter((slot) => slot.id !== id)
  );
};
const [editingParking, setEditingParking] =
  useState(null);

const updateParkingSlot = (updatedSlot) => {
  setParkingSlots((prev) =>
    prev.map((slot) =>
      slot.id === updatedSlot.id ? updatedSlot : slot
    )
  );
};

const addComplaint = (complaint) => {
  setComplaints((prev) => [
    ...prev,
    {
      id: Date.now(),
      ...complaint,
    },
  ]);
};

const deleteComplaint = (id) => {
  setComplaints((prev) =>
    prev.filter((complaint) => complaint.id !== id)
  );
};


  return (
    <SocietyContext.Provider
      value={{
        residents,
        bills,
        parkingSlots,
        addParkingSlot,
        updateParkingSlot,
        deleteParkingSlot,
        setParkingSlots,
        editingParking,
        setEditingParking,

        searchTerm,
        setSearchTerm,

        editingResident,
        setEditingResident,
        
        addResident,
        updateResident,
        deleteResident,        

        setBills,

        complaints,
        addComplaint,
        deleteComplaint,
        
      }}
    >
      {children}
    </SocietyContext.Provider>
  );
}

export default SocietyContext;

export const useSociety = () =>
  useContext(SocietyContext);