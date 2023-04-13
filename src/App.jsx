import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<OrderPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
