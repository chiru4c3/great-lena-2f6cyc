import "./styles.css";
import React, { useState } from "react";

export default function FullNameDisplay() {
  const [firstName, setFirstName] = useState(""); // store first name
  const [lastName, setLastName] = useState(""); // store last name
  const [fullName, setFullName] = useState(""); // store full name

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required // update state on input
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        {/* Submit button inside form */}
        <button type="submit">Submit</button>
      </form>

      <p>Full Name: {fullName}</p>
    </div>
  );
}
