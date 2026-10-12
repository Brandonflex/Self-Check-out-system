import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>
            Hoop Corner is a demo self-checkout store. No real payments are
            processed.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
