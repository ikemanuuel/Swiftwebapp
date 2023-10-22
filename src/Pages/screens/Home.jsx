import React from "react";
import "../css/Home.css";

function Home() {



  return (
    
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Dashboard</h1>
      </div>
      <div className="home-content">
        <div className="home-tables">
          <div className="home-table">
            <h2 className="home-name">Category Details</h2>
            <div className="hometable">
              <div className="hometable-row">
                <span className="hometable-cell">Stock Available</span> 
              </div>
              <div className="hometable-row">
                <span className="hometable-cell">Total Orders</span>
                <span className="hometable-cell">50</span>
              </div>
              <div className="hometable-row">
                <span className="hometable-cell">Total Stock</span>
                <span className="hometable-cell">150</span>
              </div>
            </div>
          </div>
          <div className="home-table">
            <h2 className="home-name">Inventory Summary</h2>
            <div className="hometable">
              <div className="hometable-row">
                <span className="hometable-cell">Total Orders</span>
                <span className="hometable-cell">30</span>
              </div>
              <div className="hometable-row">
                <span className="hometable-cell">Total Stock</span>
                <span className="hometable-cell">110</span>
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
