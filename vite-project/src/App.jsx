import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductListt from './components/ProductListt/ProductListt';
import Basket from './components/Basket/Basket';
import './App.css';


import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> 
        <main>
          <h2 className='Naglowek'>Welcome to our Clothing Store</h2>
          <Routes>
            <Route path="/" element={<ProductListt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
