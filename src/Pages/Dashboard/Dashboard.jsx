import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ...

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/accounts/dashboard/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    if (!token) {
      navigate("/");
    } else {
      fetchData();
    }
  }, [token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Sidebar />
      <div className="dashcontainer" style={{ width: '100%' }}>
        <div className="dashboard">
          <h1> </h1>

          <Routes>
            <Route path="" element={<Blackboard />} />
            <Route path="household" element={<Household />} />
            <Route path="resident" element={<Resident />} />
            <Route path="addresident" element={<Addresident />} />
            <Route path="map" element={<Map />} />
            <Route path="profile" element={<Profile />} />
            <Route path="report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
