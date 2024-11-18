import React from 'react';
import './navbar.css';
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Clothing Store</h1>
      <ul style={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#333', color: '#fff' },
  logo: { margin: 0 },
  navLinks: { listStyle: 'none', display: 'flex', gap: '15px' },
};

export default Navbar;
