import React from "react";
import { useNavigate } from "react-router-dom";

const Blackboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    // Redirect to the login page if token is not present
    navigate("/");
    return null; // Return null to avoid rendering the rest of the component
  }

  return (
    <div className="blackboard">
      <h1> Dashboard </h1>
    </div>
  );
};

export default Blackboard;
