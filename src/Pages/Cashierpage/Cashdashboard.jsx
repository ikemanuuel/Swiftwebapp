import React from "react";
import { Routes, Route } from "react-router-dom";
import Cashorder from '../screens/Cashorder';
import Rental from '../screens/Rental';
import Reports from '../screens/Reports';
import Profile from '../screens/Profile';
import Cashsidebar from "./Cashsidebar/Cashsidebar";
import Header from "../../Components/Header/Header";

import './cashier.css';


function Cashdashboard() {
  return (

    <div className="cashierheader">
    <Header /> {/* Add the Navbar component at the top */}
    <div className="cashier-container">  
      <Cashsidebar />
      <div className="cashier-background">
      <div className="cashcontainer">
        <div className="cashier">
          <Routes>.
            
            <Route path="cashorder" element={<Cashorder />} />
            <Route path="rental" element={<Rental />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Cashdashboard;