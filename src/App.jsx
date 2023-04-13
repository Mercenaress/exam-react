
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import SplashPage from './pages/SplashPage'
import EventsPage from './pages/EventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import OrderPage from './pages/OrderPage'
import TicketPage from './pages/TicketPage'
import { DataProvider } from './context/DataContext'
import { CartProvider } from './context/CartContext'



function App() {
  return (
    <DataProvider>
      <CartProvider>
    <Router>
      <Routes>
        <Route path='/' element={<SplashPage/>} />
        <Route path='/eventsPage' element={<EventsPage/>} />
        <Route path='/EventDetailsPage' element={<EventDetailsPage/>} />
        <Route path='/orderPage' element={<OrderPage/>} />
        <Route path='/ticketPage' element={<TicketPage/>} />
      </Routes>
    </Router>
    </CartProvider>
    </DataProvider>
  )

}

export default App;
