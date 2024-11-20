import React, { useState } from 'react';
import LoginWindow from '../login/LoginWindow';
import RegisterWindow from '../register/RegisterWindow';
import './navbar.css';
const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const switchToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Clothing Store</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>

        {showLogin && (
          <LoginWindow onClose={handleCloseModal} switchToRegister={switchToRegister} />
        )}

        {showRegister && (
          <RegisterWindow onClose={handleCloseModal} switchToLogin={switchToLogin} />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

