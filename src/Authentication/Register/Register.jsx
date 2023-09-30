import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {
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

  // Handle registration form submission
  const handleRegistration = (event) => {
    event.preventDefault();

    // TODO: Perform registration logic here
    // For simplicity, let's just log the submitted data for now
    console.log('Registration Data:', formData);
  };

  return (
    <div className="Registerni-pinakauna">
      <form onSubmit={handleRegistration}>
        <div className="Register-form-group">
        <text className="Registerngatxt">Register</text>
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

          <text className="naakay-account">Already have an account?</text>

          <Link to="/" className="logsbalik">
            Login
          </Link>

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
