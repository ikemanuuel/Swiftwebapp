import React from "react";
import { FaCalendarAlt } from "react-icons/fa";


function Item() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="Item-container">
      <div className="Item-content">
        <h1 className="Item-title">Item</h1>
          <p className="Item-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Item;