import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Images from "./../../Images/Logo.png";
import './Login.css';

function Login() {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your login logic here using the formData state

    // After successful login, navigate to another page
    navigate('/dashboard'); // Use navigate instead of history.push
  };
  return (
    <div className="login-background login-pinakauna"> 
      
      <form onSubmit={handleSubmit}>
        <div>
          <img className="maonianglogosaustp" src={Images} alt="" />
        </div>
          <div className="form-group">
           <p className="loginngatxt">Login</p>
           <label htmlFor="username">Username:</label>
           <input
             type="text"
             id="username"
             name="username"
             value={formData.username}
             onChange={handleInputChange}
              required />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required />

            <p className="Waz-account">Don't you have an account??</p>
            
            <Link to="/register" className="reg">
              Register
            </Link>

            <Link to="/forgotpass" className="forg">
              ForgotPassword
            </Link>

            <button type="submit">Login</button>
         </div>
       </form>
    </div>
  );
}

export default Login;
