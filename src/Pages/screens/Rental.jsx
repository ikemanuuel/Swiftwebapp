import React from "react";
import "../css/Rental.css";


function Rental() {
  return (
    <div className="Rental-container">
      <div className="rental-content">
        <h1 className="rental-title">Rental</h1>
        
        <div className="retnaltable-container">
          <div className="rentaltable-toolbar">
            <button className="sarentalrequestngabutton">Order Request</button>
            <button className="rentaltbuttonsaorder">Sort</button>
            <input type="text" placeholder="Search" className="rentalsearch-bar" />
          </div>
          
          <table className="rentalorder-table">
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
              {/* Add rows of data here */}
              <tr>
                <td>
                  <input type="rentalcheckbox" /> 
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="cancelbuttonparasaorderpage">Cancel</button>
                  <button className="updatebuttonparasaorderpage">Update</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        
        <button className="rentalremovebuttonsaorderpage">Remove</button>
      </div>
    </div>
  );
}

export default Rental;
