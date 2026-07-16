import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Navigation</h3>

      <nav>
        <ul>
          <li>
            <NavLink to="/">🏠 Dashboard</NavLink>
          </li>

          <li>
            <NavLink to="/residents">
              👥 Residents
            </NavLink>
          </li>

          <li>
            <NavLink to="/bills">
              💰 Maintenance Bills
            </NavLink>
          </li>

          <li>
            <NavLink to="/Parking">
              🚗 Parking
            </NavLink>
          </li>

          <li>
            <NavLink to="/payments">
              💳 Payments
            </NavLink>
          </li>

          <li>
            <NavLink to="/reports">
              📊 Reports
            </NavLink>
          </li>
          <li>
              <NavLink to="/complaints">
                🛠 Complaints
              </NavLink>
            </li>
          <li>
            <NavLink to="/settings">
              ⚙️ Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;