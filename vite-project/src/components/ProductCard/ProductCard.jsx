import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.price} $</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
