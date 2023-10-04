import React from "react";
import { FaCalendarAlt } from "react-icons/fa";


function Order() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="order-container">
      <div className="order-content">
        <h1 className="order-title">Order</h1>
          
      </div>
    </div>
  );
}

export default Order;