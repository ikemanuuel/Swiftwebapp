import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../screens/Home';
import Order from '../screens/Order';
import Rental from '../screens/Rental';
import Reports from '../screens/Reports';
import Categories from '../screens/Categories';
import AddCategories from '../screens/AddCategories';
import Item from '../screens/Item';
import Profile from '../screens/Profile';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import './dashboard.css';


function Dashboard() {
  return (
      
    <div className="dashboard-container">
      <Navbar /> {/* Add the Navbar component at the top */}
      <Sidebar />
      <div className="dashboard-background">
      <div className="dashcontainer">
        <div className="dashboard">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="order" element={<Order />} />
            <Route path="rental" element={<Rental />} />
            <Route path="reports" element={<Reports />} />
            <Route path="categories" element={<Categories />} />
            <Route path="addcategories" element={<AddCategories />} />
            <Route path="item" element={<Item />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;