// src/components/Profile.js
import React, { useState } from "react";
import "../css/Profile.css";

function Profile() {
  // Define state variables for user information
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the user information here (e.g., send it to a server)
    console.log("User Information:", { username, password, userType, email });
  };

  return (
    <div className="profilecontainer">
      <div className="profile-content">
        <h1 className="profile-title">User Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-username">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-type">
            <label htmlFor="userType">User Type:</label>
            <input
              type="text"
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            />
          </div>
          <div className="form-type">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;