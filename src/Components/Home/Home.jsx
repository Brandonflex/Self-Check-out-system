import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Basketball gear, checked out in minutes</h1>
      <p>
        Hoop Corner is a small demo store with a self-checkout flow. Pick what
        you need, pay at checkout and get a receipt with an order number — no
        queue required.
      </p>
      <Link to="/products" className="btn btn-primary">
        Browse products
      </Link>
    </div>
  );
};

export default Home;
