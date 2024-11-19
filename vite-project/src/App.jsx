import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductListt from './components/ProductListt/ProductListt'
import './App.css';

const App = () => {
  return (
    <div >
      <Navbar />
      <main >
        <h2>Welcome to our Clothing Store</h2>
        <ProductListt />
      </main>
      <Footer />
    </div>
  );
};



export default App;
