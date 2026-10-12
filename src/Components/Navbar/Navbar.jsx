import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { count } = useCart();

  return (
    <header className="navbar">
      <Link to="/home" className="navbar-brand">
        Hoop Corner
      </Link>
      <nav className="navbar-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/checkout" className="nav-cart">
          Checkout
          {count > 0 && <span className="cart-count">{count}</span>}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
