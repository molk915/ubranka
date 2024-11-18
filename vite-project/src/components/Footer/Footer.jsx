import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Clothing Store. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: { textAlign: 'center', padding: '10px 0', background: '#333', color: '#fff' },
};

export default Footer;