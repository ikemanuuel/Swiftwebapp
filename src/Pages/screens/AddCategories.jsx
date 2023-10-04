import React from "react";
import '../css/AddCategories.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src="/ustp-logo.png" alt="USTP Logo" />
      </div>
      <div className="navbar-text">
        <h1 className="navbar-title">University of Science and Technology of Southern Philippines</h1>
      </div>
      <div className="navbar-emblem">
        <img src="/ustp-emblem.png" alt="USTP Emblem" />
      </div>
    </div>
  );
}

function AddCategories() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="addcategories-container">
      <Navbar />
      <div className="addcategories-content">
        <h1 className="addcategories-title">AddCategories</h1>
          <p className="addcategories-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default AddCategories;
