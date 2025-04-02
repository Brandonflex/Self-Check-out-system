import React from "react";
import "./Products.css"; 

const Products = () => {
  const products = [
    { id: 1, name: "Basketball", price: 1500 },
    { id: 2, name: "Basketball Jersey", price: 2500 },
    { id: 3, name: "10ft Basketball Rim", price: 12000 },
    { id: 4, name: "Basketball Shoes", price: 8000 },
    { id: 5, name: "Basketball Net", price: 1000 },
    { id: 6, name: "Water Bottle", price: 500 },
    { id: 7, name: "Sports Bag", price: 3000 },
    { id: 8, name: "Sweatband", price: 300 },
    { id: 9, name: "Basketball Pump", price: 1200 },
    { id: 10, name: "Training Cones (Set of 10)", price: 2000 },
  ];

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
    //  cart functionality//
  };

  return (
    <div className="products">
      <h1>Product Listing</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Price: Ksh {product.price.toLocaleString()}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;