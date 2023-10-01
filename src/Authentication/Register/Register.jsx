import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css';
import Images from "./../../Images/Logo.png";

const Register = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    // TODO: Perform registration logic here
    // For simplicity, let's just log the submitted data for now
    console.log('Registration Data:', formData);

    // After successful registration, navigate to another page (e.g., login page)
    navigate('/'); // Use navigate instead of a direct link
  };


  return (
    <div className="Registerni-pinakauna">
      <form onSubmit={handleRegistration}>
        <div>
          <img className="saregisterlogoustp" src={Images} alt="" />
        </div>
          <div className="Register-form-group">
          <p className="Registerngatxt">Register</p>
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

            <p className="naakay-account">Already have an account?</p>

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
