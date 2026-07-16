import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { SocietyProvider } from "./context/SocietyContext";

import Layout from "./components/layout/Layout";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Residents from "./pages/Residents";
import Bills from "./pages/Bills";
import Parking from "./pages/Parking";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Complaints from "./pages/Complaints";

import "./App.css";

function App() {
  return (
              <AuthProvider>
                <SocietyProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route
              path="/login"
              element={<Login />}
            />
                      <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
            <Route index element={<Dashboard />} />
            <Route
              path="residents"
              element={<Residents />}
            />
                        <Route
              path="Parking"
              element={<Parking />}
            />
            <Route
              path="bills"
              element={<Bills />}
            />
            <Route
              path="payments"
              element={<Payments />}
            />
            <Route
              path="reports"
              element={<Reports />}
            />
            <Route
              path="settings"
              element={<Settings />}
            />
            <Route
              path="complaints"
              element={<Complaints />}
            />
          </Route>
          
        </Routes>
      </BrowserRouter>
      </SocietyProvider>
</AuthProvider>
  );
}

export default App;