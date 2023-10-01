import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blackboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/accounts/dashboard/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="blackboard">
      <h1> Dashboard </h1>
    </div>
  );
};

export default Blackboard;
