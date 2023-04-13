import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { DataProvider } from './context/DataContext';
import { CartProvider } from './context/CartContext';
import SwipeableRoutes from './components/SwipeableRoutes';

function App() {
  return (
    <DataProvider>
      <CartProvider>
        <Router>
          <SwipeableRoutes />
        </Router>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
