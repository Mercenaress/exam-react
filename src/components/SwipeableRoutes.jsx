import SwipeableWrapper from './SwipeableWrapper';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

// pages
import SplashPage from '../pages/SplashPage';
import EventsPage from '../pages/EventsPage';
import EventDetailsPage from '../pages/EventDetailsPage';
import OrderPage from '../pages/OrderPage';
import ConfirmationPage from '../pages/ConfirmationPage';
import TicketPage from '../pages/TicketPage';

function SwipeableRoutes() {
  const navigate = useNavigate();
  const swipeableRoutes = ['/', '/eventspage', '/ticketpage'];

  const onSwipedLeft = () => {
    if (
      window.location.pathname === '/orderpage' ||
      window.location.pathname === '/eventdetailspage' ||
      window.location.pathname === '/confirmationpage'
    ) {
      return;
    }
    const currentIndex = swipeableRoutes.findIndex(
      (route) => route === window.location.pathname
    );
    if (currentIndex < swipeableRoutes.length - 1) {
      navigate(swipeableRoutes[currentIndex + 1]);
    }
  };

  const onSwipedRight = () => {
    if (
      window.location.pathname === '/orderpage' ||
      window.location.pathname === '/eventdetailspage' ||
      window.location.pathname === '/confirmationpage'
    ) {
      return;
    }
    const currentIndex = swipeableRoutes.findIndex(
      (route) => route === window.location.pathname
    );
    if (currentIndex > 0) {
      navigate(swipeableRoutes[currentIndex - 1]);
    }
  };

  return (
    <SwipeableWrapper
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
    >
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/eventspage" element={<EventsPage />} />
        <Route path="/eventdetailspage" element={<EventDetailsPage />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/confirmationpage" element={<ConfirmationPage />} />
        <Route path="/ticketpage" element={<TicketPage />} />
      </Routes>
    </SwipeableWrapper>
  );
}

export default SwipeableRoutes;
