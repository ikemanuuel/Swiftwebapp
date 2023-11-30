import React, { useRef, useState } from "react";
import "../css/Reports.css";

function Reports() {
  const printableContentRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDateOption, setSelectedDateOption] = useState("all");

  const handlePrint = () => {
    // ... (same as before)
  };

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    // Reset the selected date option when changing the category
    setSelectedDateOption("all");
  };

  const handleDateChange = (selectedDateOption) => {
    setSelectedDateOption(selectedDateOption);
  };

  const renderTable = () => {
    switch (selectedCategory) {
      case "category2": // Sales
        return (
          <div>
            {/* Dropdown button for selecting date */}
            <div className="dropdown2">
              <select id="date" name="date" onChange={(e) => handleDateChange(e.target.value)}>
                <option value="all">All</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                {/* Add more date options as needed */}
              </select>
            </div>

            {/* Sales table */}
            <table className="reporttable">
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Item ID</th>
                  <th>Quantity Sold</th>
                  <th>Date Sold</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your sales data rows based on the selected date option */}
                {/* For example, you can conditionally render different data based on selectedDateOption */}
                {selectedDateOption === "daily" && (
                  <tr>
                    {/* Daily sales data */}
                  </tr>
                )}
                {selectedDateOption === "weekly" && (
                  <tr>
                    {/* Weekly sales data */}
                  </tr>
                )}
                {selectedDateOption === "monthly" && (
                  <tr>
                    {/* Monthly sales data */}
                  </tr>
                )}
                {selectedDateOption === "yearly" && (
                  <tr>
                    {/* Yearly sales data */}
                  </tr>
                )}
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        );
      case "category3": // Orders
        return (
          <table className="reporttable">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Item ID</th>
                <th>Quantity Ordered</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Add your orders data rows here */}
              <tr>
                <td>1</td>
                <td>101</td>
                <td>10</td>
                <td>2023-01-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>102</td>
                <td>8</td>
                <td>2023-01-01</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        );
      default: // Inventory
        return (
          <table className="reporttable">
            <thead>
              <tr>
                <th>Category ID</th>
                <th>Item ID</th>
                <th>Quantity Received</th>
                <th>Date Received</th>
                <th>Date Sold</th>
                <th>Quantity Sold</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* Add your inventory data rows here */}
              <tr>
                <td>1</td>
                <td>101</td>
                <td>10</td>
                <td>2023-01-01</td>
                <td>2023-02-01</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>2</td>
                <td>102</td>
                <td>10</td>
                <td>2023-01-01</td>
                <td>2023-02-01</td>
                <td>7</td>
                <td>3</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        );
    }
  };

  return (
    <div className="reportcontentni">
      <div className="searchbarorder">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="Report-containerni">
        <h1 className="order-title">Reports</h1>

        {/* Dropdown button for selecting category */}
        <div className="dropdown1">
          <select id="category" name="category" onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="all">Inventory</option>
            <option value="category2">Sales</option>
            <option value="category3">Orders</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Dropdown button for selecting date */}
        {/* Add your dropdown for selecting date here */}

        {/* Dropdown button for sorting */}
        {/* Add your dropdown for sorting here */}

        {/* Render the appropriate table based on the selected category */}
        {renderTable()}

        {/* Print button on the right side */}
        <div className="print-buttoninreports">
          <a href="#" onClick={handlePrint}>Print</a>
        </div>
      </div>
    </div>
  );
}

export default Reports;
