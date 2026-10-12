
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Self Checkout System</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
       
      </ul>
    </nav>
  );
};

export default Navbar;