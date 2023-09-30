import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  // State to manage user input
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform authentication logic here
    // For simplicity, let's just log the submitted data for now
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="login-pinakauna">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <text className="loginngatxt">Login</text>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        
        
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        
       
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <p className="Waz-account">Don't you have an account??</p>

          <Link to="/register" className="reg">
            Register
          </Link>

          <Link to="/forgotpass" className="reg">
            ForgotPassword
          </Link>

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
