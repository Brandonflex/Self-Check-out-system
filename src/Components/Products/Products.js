import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="products">

      <h1>Products</h1>
      <p>Here you can find a variety of products available for purchase.</p>

      <p>Click on the product to view more details.</p>

      <p>Product 1 = ksh 250/= <button>Add to cart</button> </p>


      <p>Product 2 = Ksh 1,500/= <button>Add to cart</button></p>


      <p>Product 3 = Ksh 22,999/= <button>Add to cart</button></p>


      <p>product 4 = Ksh 205/= <button>Add to cart</button></p>
    </div>
  );
};

export default Products;