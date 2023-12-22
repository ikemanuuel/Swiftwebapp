import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cashorder from '../screens/Cashorder';
import Rental from '../screens/Rental';
import Reports from '../screens/Reports';
import Profile from '../screens/Profile';
import Cashsidebar from "./Cashsidebar/Cashsidebar";
import Header from "../../Components/Header/Header";
import './cashier.css';

function Cashdashboard() {
  const [user_type, setUserType] = useState(null);

  useEffect(() => {
    // Example: Fetch user information (including user type) during application initialization
    const fetchUserType = async () => {
      try {
        const userData = await AuthService.getUserData(); // Implement this function
        setUserType(userData.user_type);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    fetchUserType();
  }, []);

  // If user type is not available, you can show a loading state or redirect to login
  if (user_type === null) {
    return <div>Loading...</div>;
  }

  // Assume userType is a string like "cashier" or "admin"
  // You can adjust this condition based on your authentication logic
  if (user_type === "Cashier") {
    return (
      <div className="cashierheader">
        <Header />
        <div className="cashier-container">
          <Cashsidebar />
          <div className="cashier-background">
            <div className="cashcontainer">
              <div className="cashier">
                <Routes>
                  <Route path="cashorder" element={<Cashorder />} />
                  <Route path="rental" element={<Rental />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="profile" element={<Profile />} />
                  {/* Add more routes as needed */}
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // Redirect to a different page if the user type is not "cashier"
    return <Navigate to="/login" />;
  }
}

export default Cashdashboard;
