import React from 'react';
import './navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Clothing Store</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

