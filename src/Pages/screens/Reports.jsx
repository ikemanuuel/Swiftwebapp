import React, { useRef } from "react";
import "../css/Reports.css";

function Reports() {
  const printableContentRef = useRef(null);

  const handlePrint = () => {
    if (printableContentRef.current) {
      // Create a copy of the printable content
      const printContent = printableContentRef.current.cloneNode(true);

      // Hide non-printable elements
      const nonPrintableElements = printContent.querySelectorAll(".non-printable");
      nonPrintableElements.forEach((element) => {
        element.style.display = "none";
      });

      // Create a new window and print the content
      const printWindow = window.open("", "_blank");
      printWindow.document.write('<html><head><title>Print</title>');
      printWindow.document.write('<style>@media print {.non-printable { display: none; }}</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
      // Note: You may want to close the print window programmatically if needed
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
          <select id="category" name="category">
            <option value="all">Inventory</option>
            <option value="category2">Sales</option>
            <option value="category3">Orders</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Dropdown button for selecting date */}
        <div className="dropdown2">
          <select id="date" name="date">
            <option value="all">Date</option>
            <option value="date2">Daily</option>
            <option value="date3">Weekly</option>
            <option value="date4">Monthly</option>
            <option value="date5">Yearly</option>
            {/* Add more date options as needed */}
          </select>
        </div>

        {/* Dropdown button for sorting */}
        <div className="dropdown3">
          <select id="sort" name="sort">
            <option value="all">Sort by:</option>
            <option value="pantsM">PantsM</option>
            <option value="pantsF">PantsF</option>
            <option value="polo">Polo</option>
            <option value="blouse">Blouse</option>
            <option value="toga">Toga</option>
            {/* Add more sorting options as needed */}
          </select>
        </div>

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
            {/* Add your data rows here */}
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

        {/* Print button on the right side */}
        <div className="print-buttoninreports">
          <a href="#" onClick={() => window.print()}>Print</a>
        </div>
      </div>
    </div>
  );
}

export default Reports;
