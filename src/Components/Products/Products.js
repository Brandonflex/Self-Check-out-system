import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [cart, setCart] = useState([]); // State to manage cart items

  const products = [
    { id: 1, name: "Basketball", price: 1500 },
    { id: 2, name: "Basketball Jersey", price: 2500 },
    { id: 3, name: "10ft Basketball Rim", price: 12000 },
    { id: 4, name: "Basketball Shoes", price: 8000 },
    { id: 5, name: "Basketball Net", price: 1000 },
  ];

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
    alert(`${product.name} added to cart!`);
  };



      <p>Product 3 = Ksh 22,999/= <button>Add to cart</button></p>


      <p>product 4 = Ksh 205/= <button>Add to cart</button></p>
      

      <p>Product 1 = ksh 250/= <button>Add to cart</button> </p>


        <p>Product 2 = Ksh 1,500/= <button>Add to cart</button></p>


        <p>Product 3 = Ksh 22,999/= <button>Add to cart</button></p>


        <p>product 4 = Ksh 205/= <button>Add to cart</button></p>
  return (
    <div className="products">
      <h1>Products</h1>
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

      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - Ksh {item.price.toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default Products;