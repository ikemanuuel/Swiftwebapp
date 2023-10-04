import React from "react";
import { FaCalendarAlt } from "react-icons/fa";


function Categories() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="categories-container">
      <div className="categories-content">
        <h1 className="categories-title">Categories</h1>
          <p className="categories-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Categories;