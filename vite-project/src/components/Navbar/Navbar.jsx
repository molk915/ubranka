import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Clothing Store</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
