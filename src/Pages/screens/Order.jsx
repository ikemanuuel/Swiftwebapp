// Order.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/Order.css";

function Order() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [rows, setRows] = useState([
    { id: 1, date: "6/05/2023", username: "Pslamer", requestId: 111, type: "over the counter", status: "pending" },
    { id: 2, date: "6/05/2023", username: "Bon", requestId: 114, type: "over the counter", status: "pending" },
    // Add more rows as needed
  ]);

  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (orderId) => {
    if (selectedRows.includes(orderId)) {
      setSelectedRows(selectedRows.filter((id) => id !== orderId));
    } else {
      setSelectedRows([...selectedRows, orderId]);
    }
  };

  const handleRemoveClick = () => {
    const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(updatedRows);
    setSelectedRows([]); // Clear selected rows after removal
  };

  const handleOrderRequestClick = () => {
    // Use navigate to go to the order request page
    navigate("/OrderRequest");
  };

  return (
    <div className="order-container">
      <div className="searchbarorder">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="order-content">
        <h1 className="order-title">Order</h1>

        <div className="table-container">
          <div className="table-toolbar">
            {/* Call the function when the button is clicked */}
            <button className="saorderrequestngabutton" onClick={handleOrderRequestClick}>
              Order Request
            </button>

            {/* Updated Sort button to a dropdown */}
            <div className="dropdown-sortbuttonsaorder">
              <select id="category" name="category">
                <option value="all">sort 1</option>
                <option value="sort 2">sort 2</option>
                <option value="sort 3">sort 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <div className="table-and-remove">
            <button className="removebuttonsaorderpage" onClick={handleRemoveClick}>
              Remove
            </button>

            <table className="order-table">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Order date</th>
                  <th>Username</th>
                  <th>Request Order Id</th>
                  <th>Payment type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through rows and render */}
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(row.id)}
                        checked={selectedRows.includes(row.id)}
                      />
                      {row.id}
                    </td>
                    <td>{row.date}</td>
                    <td>{row.username}</td>
                    <td>{row.requestId}</td>
                    <td>{row.type}</td>
                    <td>{row.status}</td>
                    <td>
                      <button className="updatebuttonparasaorderpage">Update</button>
                      <button className="cancelbuttonparasaorderpage">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
