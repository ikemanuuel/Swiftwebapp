import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import Images from './../../Images/Logo.png';
import { registerUser } from '../../Components/api/api';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    user_type: ''
  });

  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if passwords match on input change
    // if (name === 'confirmPassword') {
    //   if (formData.password !== value) {
    //     setPasswordsMatch(false);
    //   } else {
    //     setPasswordsMatch(true);
    //   }
    // }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);

      // Passwords match, proceed with registration
      // TODO: Perform registration logic here
      // For simplicity, let's just log the submitted data for now
      console.log('Registration Data:', formData);

      // After successful registration, navigate to the login page
      navigate('/');
    }
  };

  const handleOnSubmit = ()=> {
    
      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match')
      } else {
        setMessage('Password match')
      }
    registerUser(formData)
    
    console.log(formData)
  }

  return (
    <div className="Registerni-pinakauna">
      <form onSubmit={handleRegistration}>
        <div>
          <img className="saregisterlogoustp" src={Images} alt="" />
        </div>
        <div className="Register-form-group">
          <p className="Registerngatxt">Register</p>
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="confirmPassword">User Type:</label>
            <div className="password-input">
              <select value={formData.user_type} onChange={(event) => {
                setFormData((prevData)=> ({
                  ...prevData, user_type: event.target.value
                }))
              }}>
                <option>-------Select---------</option>
                <option value="Cashier">Cashier</option>
                <option value="Inventory Clerk">Inventory Clerk</option>
                <option value="Inventory Sales">Inventory Sales</option>
                
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <p
            className={`password-do-not-match ${message === "Passwords do not match" ? 'error' : 'success'}`}
          >
            {message}
          </p>
          <p className="naakay-account">Already have an account?</p>
          <Link to="/" className="logsbalik">
            Login
          </Link>
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="password-visibility-toggle"
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
          <button onClick={handleOnSubmit} type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
