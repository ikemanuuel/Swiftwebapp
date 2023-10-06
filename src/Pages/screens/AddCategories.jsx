import React, { useState } from 'react';
import axios from 'axios';

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
    axios.post('http://localhost:8000/api/categories/', formData) // Update the URL
      .then(response => {
        alert('Category added successfully!');
        setFormData({
          category_name: '', // Reset the form field
        });
      })
      .catch(error => {
        console.log(error);
        alert('Error adding category!');
      });
  };

  return (
    <div align="center">
      <h1 className="title">Add Category</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category_name">Category Name:</label>
        <input
          type="text"
          id="category_name"
          name="category_name"
          value={formData.category_name}
          onChange={handleChange}
        /><br />

        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategories;
