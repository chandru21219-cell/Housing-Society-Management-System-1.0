import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(username, password);

    if (success) {
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="form-container">
      <h2>🔐 Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Demo Credentials:
      </p>

      <p>
        Username: <strong>admin</strong>
      </p>

      <p>
        Password: <strong>admin123</strong>
      </p>
    </div>
  );
}

export default Login;