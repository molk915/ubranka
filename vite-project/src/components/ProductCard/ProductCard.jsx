import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.price} $</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: { border: '1px solid #ddd', borderRadius: '5px', padding: '10px', textAlign: 'center', maxWidth: '200px' },
  image: { width: '100%', height: 'auto', borderRadius: '5px' },
  button: { marginTop: '10px', padding: '5px 10px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px' },
};

export default ProductCard;