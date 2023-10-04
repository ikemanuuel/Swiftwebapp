import React from "react";
import { FaCalendarAlt } from "react-icons/fa";


function Rental() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Rental</h1>
          <p className="home-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Rental;