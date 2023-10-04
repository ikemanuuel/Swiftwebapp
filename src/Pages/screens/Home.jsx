import React from "react";
import "../css/Home.css";

function Home() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Dashboard</h1>
      </div>
      <div className="home-content">
        <div className="category-tables">
          <div className="category-table">
            <h2 className="category-name">Category Details</h2>
            <div className="table">
              <div className="table-row">
                <span className="table-cell">Stock Available</span> 
              </div>
              <div className="table-row">
                <span className="table-cell">Total Orders</span>
                <span className="table-cell">50</span>
              </div>
              <div className="table-row">
                <span className="table-cell">Total Stock</span>
                <span className="table-cell">150</span>
              </div>
            </div>
          </div>
          <div className="category-table">
            <h2 className="category-name">Inventory Summary</h2>
            <div className="table">
              <div className="table-row">
                <span className="table-cell">Total Orders</span>
                <span className="table-cell">30</span>
              </div>
              <div className="table-row">
                <span className="table-cell">Total Stock</span>
                <span className="table-cell">110</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-footer">
      </div>
      </div>
    
  );
}

export default Home;
