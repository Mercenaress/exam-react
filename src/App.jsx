import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import SplashPage from './pages/SplashPage'
import EventsPage from './pages/EventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import OrderPage from './pages/OrderPage'
import TicketPage from './pages/TicketPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplashPage/>} />
        <Route path='/eventspage' element={<EventsPage/>} />
        <Route path='/eventdetailspage' element={<EventDetailsPage/>} />
        <Route path='/orderpage' element={<OrderPage/>} />
        <Route path='/ticketpage' element={<TicketPage/>} />
      </Routes>
    </Router>
  )
}

export default App
