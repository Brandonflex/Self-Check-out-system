import React from 'react';
import './Products.css';

const Products = () => {
  // Mock product data
  const productList = [
    { id: 1, name: 'Apple', price: 1.0, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Banana', price: 0.5, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Orange', price: 0.8, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;