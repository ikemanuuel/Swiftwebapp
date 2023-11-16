import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Item.css"; // Import the CSS file

function Item() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]); // State to hold category data
  const [newItem, setNewItem] = useState({
    category: "", // Use 'category' for the selected category
    item_name: "",
    size: "",
    price: "",
    tag: "",
    author: "",
    quantity: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch categories from your backend API
    axios
      .get("http://localhost:8000/api/categories/") // Replace with your backend API URL
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch items from your backend API
    axios
      .get("http://localhost:8000/api/items/") // Replace with your backend API URL
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios
      .post("http://localhost:8000/api/items/", newItem)
      .then((response) => {
        alert('Item added successfully!');
        setItems([...items, response.data]);
        setNewItem({
          category: "",
          item_name: "",
          size: "",
          price: "",
          tag: "",
          author: "",
          quantity: "",
        });
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error adding item:", error); // Log the error message
        alert('Error adding item! See the console for details.'); // Display a generic error message to the user
      });
  };
  
  

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="backgroundsaitems">
      <div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        <button className="modal-button" onClick={openModal}>
          Add Item
        </button>

        {showModal && (
  <div className="modal">
    <div className="modal-content">
      <span className="close-button" onClick={closeModal}>
        &times;
      </span>
      <h2>Add Item</h2>
      <div className="add-item-form">
        <select
          name="category"
          value={newItem.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.category_id} value={category.category_id}>
              {category.category_name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item Name"
          name="item_name"
          value={newItem.item_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Size"
          name="size"
          value={newItem.size}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={newItem.price}
          onChange={handleChange}
        />
        <select
          name="tag"
          value={newItem.tag}
          onChange={handleChange}
        >
          <option value="">Select Tag</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newItem.author}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Quantity"
          name="quantity"
          value={newItem.quantity}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Item</button>
      </div>
    </div>
  </div>
)}



        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Category</th>
              <th>Item Name</th>
              {/* Other table headers */}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.items_id}>
                <td>{item.items_id}</td>
                <td>{item.category.category_name}</td>
                <td>{item.item_name}</td>
                {/* Other table data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Item;
