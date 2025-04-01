import React from "react";
import "./Products.css"; // Ensure you style the component appropriately

const Products = () => {
  const products = [
    { id: 1, name: "Basketball", price: 1500 },
    { id: 2, name: "Basketball Jersey", price: 2500 },
    { id: 3, name: "10ft Basketball Rim", price: 12000 },
    { id: 4, name: "Basketball Shoes", price: 8000 },
  ];

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
    // You can implement actual cart functionality here
  };

  return (
    <div className="products">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: Ksh {product.price.toLocaleString()}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;