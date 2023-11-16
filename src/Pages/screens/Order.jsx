import React from "react";
import "../css/Order.css";


function Order() {
  return (
    
    <div className="order-container">
        <div className="searchbarorder">
          <input type="text" placeholder="Search..." />
        </div>

      <div className="order-content">
        <h1 className="order-title">Order</h1>
        
        <div className="table-container">
          <div className="table-toolbar">
            <button className="saorderrequestngabutton">Order Request</button>
            <button className="pangsortbuttonsaorder">Sort</button>
            
          </div>
          
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
              {/* Add rows of data here */}
              <tr>
                <td>
                  <input type="checkbox" /> 
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
        
        <button className="removebuttonsaorderpage">Remove</button>
      </div>
    </div>
  );
}

export default Order;
