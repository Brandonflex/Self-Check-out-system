import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Products.css';

const products = [
  { id: 1, name: 'Basketball', price: 1500 },
  { id: 2, name: 'Basketball Jersey', price: 2500 },
  { id: 3, name: '10ft Basketball Rim', price: 12000 },
  { id: 4, name: 'Basketball Shoes', price: 8000 },
  { id: 5, name: 'Basketball Net', price: 1000 },
];

const Products = () => {
  const { items, addItem, setQty, total } = useCart();
  const [query, setQuery] = useState('');

  const visible = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const qtyInCart = (id) => {
    const item = items.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  return (
    <div className="products">
      <h1>Products</h1>

      <input
        type="search"
        className="product-search"
        placeholder="Search products"
        aria-label="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="product-list">
        {visible.map((product) => {
          const qty = qtyInCart(product.id);
          return (
            <li key={product.id} className="product-item">
              <div className="product-details">
                <h2>{product.name}</h2>
                <p className="product-price">
                  Ksh {product.price.toLocaleString()}
                </p>
              </div>
              {qty > 0 ? (
                <div className="qty-controls">
                  <button
                    type="button"
                    aria-label={`Remove one ${product.name}`}
                    onClick={() => setQty(product.id, qty - 1)}
                  >
                    -
                  </button>
                  <span className="qty">{qty}</span>
                  <button
                    type="button"
                    aria-label={`Add one ${product.name}`}
                    onClick={() => setQty(product.id, qty + 1)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn"
                  onClick={() => addItem(product)}
                >
                  Add to cart
                </button>
              )}
            </li>
          );
        })}
        {visible.length === 0 && (
          <li className="no-results">Nothing matches &ldquo;{query}&rdquo;.</li>
        )}
      </ul>

      <div className="cart-summary">
        <div className="cart-summary-total">
          <span>Cart total</span>
          <strong>Ksh {total.toLocaleString()}</strong>
        </div>
        <Link to="/checkout" className="btn btn-primary">
          Go to checkout
        </Link>
      </div>
    </div>
  );
};

export default Products;
