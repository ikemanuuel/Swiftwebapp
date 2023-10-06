import React, { useState } from "react";
import "../css/Item.css"; // Import the CSS file

function Item() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    categoryId: "",
    itemName: "",
    size: "",
    price: "",
    tag: "",
    author: "",
    quantity: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [itemIdCounter, setItemIdCounter] = useState(1); // Initialize the item ID counter

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = () => {
    // Use the current value of itemIdCounter as the item ID
    const newItemWithId = {
      itemId: itemIdCounter,
      ...newItem,
    };
    setItems([...items, newItemWithId]);
    setNewItem({
      categoryId: "",
      itemName: "",
      size: "",
      price: "",
      tag: "",
      author: "",
      quantity: "",
    });
    // Increment the itemIdCounter for the next item
    setItemIdCounter(itemIdCounter + 1);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
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
          <button>Search</button>
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
                {/* Item ID will be generated sequentially */}
                <input
                  type="text"
                  placeholder="Category ID"
                  name="categoryId"
                  value={newItem.categoryId}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Item Name"
                  name="itemName"
                  value={newItem.itemName}
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
                <input
                  type="text"
                  placeholder="Tag"
                  name="tag"
                  value={newItem.tag}
                  onChange={handleChange}
                />
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
                <button onClick={addItem}>Add Item</button>
              </div>
            </div>
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Category ID</th>
              <th>Item Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Tag</th>
              <th>Author</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.itemId}</td>
                <td>{item.categoryId}</td>
                <td>{item.itemName}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td>{item.tag}</td>
                <td>{item.author}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Item;
