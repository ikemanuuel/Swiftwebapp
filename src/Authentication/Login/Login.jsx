import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Images from './../../Images/Logo.png';
import './Login.css';
import { loginUser } from '../../Components/api/api';
import { message } from 'antd';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me" checkbox

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(formData, navigate)


    // Perform your login logic here using the formData state

    // After successful login, check if "Remember Me" is selected
    if (rememberMe) {
      // Save user data for remembering (e.g., using cookies or local storage)
    }

    
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

          
        
          <div className="remember-me">
          <label htmlFor="rememberMe">Remember Me</label>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            
          </div>

          

          <Link to="/register" className="reg">
            Register
          </Link>

          <p className='forgotpass'>To reset your password please click the </p>
          <Link to="/forgotpass" className="forg">
            Forgot Password 
          </Link>
         

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
