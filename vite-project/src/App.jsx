import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductListt from './components/ProductListt/ProductListt'
import './App.css';

const App = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      <main style={styles.main}>
        <h2>Welcome to our Clothing Store</h2>
        <ProductListt />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  app: { fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' },
  main: { flex: '1', padding: '20px' },
};

export default App;
