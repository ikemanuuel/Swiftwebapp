import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "../css/OrderRequest.css"; // Assuming you have a separate CSS file for OrderRequest

function OrderRequest() {
  const [orderRequests, setOrderRequests] = useState([
    { id: 1, itemId: 101, cartId: 201, numberOfItems: 2 },
    { id: 2, itemId: 102, cartId: 202, numberOfItems: 3 },
    // Add more order requests as needed
  ]);

  const [itemInfo, setItemInfo] = useState({});
  const [selectedOrderRequest, setSelectedOrderRequest] = useState(null);

  useEffect(() => {
    // Fetch item info for each order request
    const fetchItemInfo = async () => {
      const info = {};
      for (const orderRequest of orderRequests) {
        const itemData = await getItemInfo(orderRequest.itemId);
        info[orderRequest.id] = itemData; // Assuming itemData has itemName and amount
      }
      setItemInfo(info);
    };

    fetchItemInfo();
  }, [orderRequests]);

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleActionClick = (orderRequestId, action) => {
    // Handle the action (Accept or Decline) based on the orderRequestId
    console.log(`Order Request ID: ${orderRequestId}, Action: ${action}`);

    // Assuming you want to navigate to the "/order" route on "Accept"
    if (action === "Accept") {
      // Navigate to the order page
      navigate("/dashboard/rental");
    }
  };

  const handleViewClick = (orderRequestId) => {
    // Set the selected order request for viewing details
    setSelectedOrderRequest(orderRequestId);
  };

  const handleCloseModal = () => {
    // Close the modal by resetting the selected order request
    setSelectedOrderRequest(null);
  };

  return (
    <div className="order-request-container">
      <h1 className="order-request-title">Rental Request</h1>
      <div className="table-container">
        <table className="order-request-table">
          <thead>
            <tr>
              <th>Order Request ID</th>
              <th>Item ID</th>
              <th>Cart ID</th>
              <th>No of Items</th>
              <th>Item Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderRequests.map((orderRequest) => (
              <tr key={orderRequest.id}>
                <td>
                  {orderRequest.id}{" "}
                  <button onClick={() => handleViewClick(orderRequest.id)}>
                    View
                  </button>
                </td>
                <td>{orderRequest.itemId}</td>
                <td>{orderRequest.cartId}</td>
                <td>{orderRequest.numberOfItems}</td>
                <td>{itemInfo[orderRequest.id]?.itemName || "N/A"}</td>
                <td>{itemInfo[orderRequest.id]?.amount || "N/A"}</td>
                <td>
                  <button
                    onClick={() => handleActionClick(orderRequest.id, "Accept")}
                    className="accept-button"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleActionClick(orderRequest.id, "Decline")}
                    className="decline-button"
                  >
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying account information */}
      {selectedOrderRequest && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Account Information for Order Request {selectedOrderRequest}</h2>
            {/* Add account information table */}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderRequest;
