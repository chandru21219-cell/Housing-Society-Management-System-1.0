import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>🏢 Housing Society Bill Maintenance System</h1>

      {isLoggedIn && (
        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;