import React from "react";
import { FaCalendarAlt } from "react-icons/fa";


function Reports() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="repoorts-container">
      <div className="reports-content">
        <h1 className="reports-title">Reports</h1>
          <p className="reports-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Reports;