import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const initialForm = { name: '', phone: '', method: 'mpesa' };

function makeOrderId() {
  return 'SC-' + Date.now().toString(36).toUpperCase();
}

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) {
      next.name = 'Enter your name.';
    }
    const phone = form.phone.replace(/[\s-]/g, '');
    if (!/^(\+254|0)7\d{8}$/.test(phone)) {
      next.phone = 'Enter a valid Kenyan phone number, e.g. 0712 345 678.';
    }
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setOrder({
      id: makeOrderId(),
      placedAt: new Date().toLocaleString(),
      items,
      total,
      name: form.name.trim(),
      phone: form.phone,
      method: form.method,
    });
    clearCart();
    setForm(initialForm);
  };

  if (order) {
    return (
      <div className="checkout receipt">
        <h1>Order placed</h1>
        <p className="receipt-id">Order {order.id}</p>
        <p className="receipt-date">{order.placedAt}</p>

        <table className="receipt-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>Ksh {item.price.toLocaleString()}</td>
                <td>Ksh {(item.price * item.qty).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>Ksh {order.total.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>

        <p className="receipt-meta">
          Paid via {order.method === 'mpesa' ? 'M-Pesa' : 'cash'} &bull;{' '}
          {order.phone}
        </p>
        <p className="receipt-meta">
          Keep this order number &mdash; the till needs it.
        </p>

        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          Start a new order
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="checkout">
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
        <Link to="/products" className="btn btn-primary">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-grid">
        <section className="order-summary">
          <h2>Order summary</h2>
          <ul className="summary-list">
            {items.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} &times; {item.qty}
                </span>
                <span>Ksh {(item.price * item.qty).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="summary-total">
            <span>Total</span>
            <strong>Ksh {total.toLocaleString()}</strong>
          </div>
        </section>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Your details</h2>

          <label htmlFor="customer-name">Name</label>
          <input
            id="customer-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
          />
          {errors.name && <p className="form-error">{errors.name}</p>}

          <label htmlFor="customer-phone">Phone number</label>
          <input
            id="customer-phone"
            name="phone"
            type="text"
            inputMode="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="0712 345 678"
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}

          <fieldset>
            <legend>Payment method</legend>
            <label>
              <input
                type="radio"
                name="method"
                value="mpesa"
                checked={form.method === 'mpesa'}
                onChange={handleChange}
              />
              M-Pesa
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="cash"
                checked={form.method === 'cash'}
                onChange={handleChange}
              />
              Cash
            </label>
          </fieldset>

          <button type="submit" className="btn btn-primary">
            Place order &mdash; Ksh {total.toLocaleString()}
          </button>
          <p className="checkout-note">
            This is a demo store; no payment is actually processed.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
