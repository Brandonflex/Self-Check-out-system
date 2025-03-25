
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Self Checkout System</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#checkout">Checkout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;