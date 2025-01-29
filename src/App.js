import "./styles.css";
import React, { useState } from "react";

export default function FullNameDisplay() {
  const [firstName, setFirstName] = useState(""); // store first name
  const [lastName, setLastName] = useState(""); // store last name
  const [fullName, setFullName] = useState(""); // store full name
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    //edge case checking if one or both fields are empty
    if (!firstName.trim() || !lastName.trim()) {
      setErrorMessage("Both First Name and Last Name are required");
      setFullName(""); // Clear the full name display
      return;
    }
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      setErrorMessage("Names should only contain letters and spaces.");
      setFullName(""); // Clear the full name display
      return;
    }
    // If no errors, display the full name
    setFullName(`${firstName} ${lastName}`);
    setErrorMessage(""); // Clear any error message
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
