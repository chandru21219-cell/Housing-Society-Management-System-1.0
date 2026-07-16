import { useState, useEffect } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    societyName: "",
    secretaryName: "",
    phone: "",
    email: "",
    defaultMaintenance: "",
    dueDate: "",
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("settings");

    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    alert("Settings saved successfully.");
  };

  return (
    <div className="form-container">
      <h2>⚙ Society Settings</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="societyName"
          placeholder="Society Name"
          value={settings.societyName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="secretaryName"
          placeholder="Secretary Name"
          value={settings.secretaryName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={settings.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={settings.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="defaultMaintenance"
          placeholder="Default Monthly Maintenance"
          value={settings.defaultMaintenance}
          onChange={handleChange}
        />

        <input
          type="number"
          name="dueDate"
          placeholder="Due Date (e.g. 10)"
          value={settings.dueDate}
          onChange={handleChange}
        />

        <button className="btn btn-primary" type="submit">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;