
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const products = [
  { id: 1, name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jeans', price: 49.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Jacket', price: 99.99, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Sneakers', price: 69.99, image: 'https://via.placeholder.com/150' },
];

const ProductListt = () => {
  return (
    <div className="products">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListt;
