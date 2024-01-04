import React, { useState, useEffect } from "react";
import "../css/Item.css"; // Import the CSS file
import { fetchCategories, addItems, fetchItems} from "../../Components/api/api";

function Item() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isBookSelected, setIsBookSelected] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [newItem, setNewItem] = useState({
    category: "", 
    item_name: "",
    size: "",
    price: "",
    tag: "",
    author: "",
    quantity: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showQuantityModal, setShowQuantityModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddQuantityClick = (item) => {
    setSelectedItem(item);
    setShowQuantityModal(true);
  };

  const handleAddQuantityModal = () => {
    // Implement logic to add quantity to the selected item
    // You can use setSelectedItem to update the quantity of the selected item
    // For example, setSelectedItem({ ...selectedItem, quantity: selectedItem.quantity + parseInt(newQuantity, 10) });

    // Close the modal
    closeModal();
  };

  useEffect(() => {
    // Fetch categories from your backend API
    fetchCategories(setCategories);

    // Fetch items from your backend API
    fetchItems(setItems);
  }, []);

  useEffect(() => {
    if (categoryName === "Books") {
      setIsBookSelected(true);
    } else {
      setIsBookSelected(false);
    }
  }, [categoryName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });

    if (name === "category") {
      const category = value.split("T");
      const categoryId = category[0];
      const categoryName = category[1];
      setNewItem((prevData) => ({
        ...prevData,
        category: categoryId
      }));
      setCategoryName(categoryName);
    }
  };

  const handleSubmit = () => {
    addItems(newItem, setShowModal);
  };

  const handleAddItem = (item) => {
    addItemQuantity(item.items_id, /* additional parameters if needed */);
    // Implement any logic you need after adding quantity
  };

  const handleRemoveItem = (item) => {
    removeItemQuantity(item.items_id, /* additional parameters if needed */);
    // Implement any logic you need after removing quantity
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowQuantityModal(false);
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
                  <option value="">
                    {newItem.category === "" ? "Select Category" : categoryName}
                  </option>
                  {categories.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_id + "T" + category.category_name}
                    >
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
                {!isBookSelected && (
                  <input
                    type="text"
                    placeholder="Size"
                    name="size"
                    value={newItem.size}
                    onChange={handleChange}
                  />
                )}
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
                {isBookSelected && (
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={newItem.author}
                    onChange={handleChange}
                  />
                )}
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
              <th>Category Name</th>
              <th>Author</th>
              <th>Tag</th>
              <th>Item Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Add/Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.items_id}>
                <td>{item.category_name}</td>
                <td>{item.author ? item.author : "N/A"}</td>
                <td>{item.tag}</td>
                <td>{item.item_name}</td>
                <td>{item.size ? item.size : "N/A"}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleAddQuantityClick(item)}>
                    Add Quantity
                  </button>
                  <button onClick={() => handleRemoveItem(item)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding quantity */}
      {showQuantityModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Quantity</h2>
            <div className="add-quantity-form">
              <p>Item: {selectedItem.item_name}</p>
              <p>Current Quantity: {selectedItem.quantity}</p>
              <input
                type="number"
                placeholder="Quantity to Add"
                name="newQuantity"
                value={newItem.newQuantity}
                onChange={handleChange}
              />
              <button onClick={handleAddQuantityModal}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
