import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the list of categories from your API
    axios.get("http://localhost:8000/api/categories/").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="backgroundniparadiri">
      <div className="categoriescontaineroh">
        <div className="categoriescontentoh">
          <div>
            <h2>Categories</h2>
            <table>
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Category Name</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.category_id}>
                    <td>{category.category_id}</td>
                    <td>{category.category_name}</td>
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

export default Categories;
