import React, { useState } from 'react';
import axios from 'axios';
import "../css/AddCategories.css";
import { addCategories } from '../../Components/api/api';

const AddCategories = () => {
  const [formData, setFormData] = useState({
    category_name: '', // Change 'type' to 'category_name' to match your Django model
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategories(formData)
  };

  return (
    <div className="add-category-container">
      <div align="center">
        <h1 className="add-category-title">Add Category</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="category_name">Category Name:</h2>
          <input
            className="field-input"
            type="text"
            id="category_name"
            name="category_name"
            value={formData.category_name}
            onChange={handleChange}
          />
          <br />

          <button  type="submit" className="add-category-button">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};



export default AddCategories;
