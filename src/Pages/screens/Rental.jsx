import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Rental.css";

function Rental() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Paid");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStatusChange = (status) => {
    console.log("Selected status changed:", status);
    setSelectedStatus(status);
  };
  
  const handleSave = () => {
    console.log("Save button clicked");
    console.log("Saved status:", selectedStatus);
    handleCloseModal();
  };

  const handleOrderRequestClick = () => {
    // Use navigate to go to the order request page
    navigate("/RentalRequest");
  };

  return (
    <div className="Rental-container">
      <div className="rentalsearch-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="rental-content">
      
        <h1 className="rental-title">Rental</h1>
        
        <button className="rentalrequestngabutton" onClick={handleOrderRequestClick}>
              Rental request
      </button>

      
        <table className="rental-table">
          <thead>
            <tr>
              <th>Rental ID</th>
              <th>Username</th>
              <th>Item Name</th>
              <th>Category ID</th>
              <th>Rental Price</th>
              <th>Rental Deposit</th>
              <th>Remarks</th>
              <th>Payment Type</th>
              <th>Date Claimed</th>
              <th>Date Return</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows of data here */}
            <tr>
              <td>556</td>
              <td>Username1</td>
              <td>Item1</td>
              <td>1</td>
              <td>300</td>
              <td>500</td>
              <td>Remarks1</td>
              <td>Payment1</td>
              <td>06/05/2023</td>
              <td>6/05/2023</td>
              <td>6/05/2023</td>
              <td>Paid</td>
              <td
                className="edit-link"
                onClick={() => setShowModal(true)}
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                Edit
              </td>
            </tr>

            <tr>
              <td>145</td>
              <td>Username2</td>
              <td>Item2</td>
              <td>1</td>
              <td>300</td>
              <td>500</td>
              <td>Remarks2</td>
              <td>Payment2</td>
              <td>06/05/2023</td>
              <td>6/05/2023</td>
              <td>6/05/2023</td>
              <td>Paid</td>
              <td
                className="edit-link"
                onClick={() => setShowModal(true)}
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                Edit
              </td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>

        {showModal && (
          <div className="modalrental">
            <div className="modal-contentrental">
              <span className="closerental" onClick={handleCloseModal}>&times;</span>
              <h2>Edit Rental Status</h2>
              <div className="rentaledit">
                <form>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Paid"
                      checked={selectedStatus === "Paid"}
                      onChange={() => handleStatusChange("Paid")}
                    />
                    Paid
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Unpaid"
                      checked={selectedStatus === "Unpaid"}
                      onChange={() => handleStatusChange("Unpaid")}
                    />
                    Unpaid
                  </label>
                  {/* Add more radio buttons for other status options as needed */}
                </form>
                <div className="buttonrentaledit">
                  <button className="edit-rental-cancel" onClick={handleCloseModal}>
                    Cancel
                  </button>
                  <button className="edit-rental-save" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rest of your content */}
      </div>
    </div>
  );
}

export default Rental;
