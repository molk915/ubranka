import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import clothing from '../../clothing.json'; 
const ProductListt = () => {
  return (
    <div className="products">
      {clothing.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListt;
