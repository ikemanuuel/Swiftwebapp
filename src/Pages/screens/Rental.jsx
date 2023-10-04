import React from "react";
import { FaCalendarAlt } from "react-icons/fa";


function Rental() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="rental-container">
      <div className="rental-content">
        <h1 className="rental-title">Rental</h1>
      </div>
    </div>
  );
}

export default Rental;