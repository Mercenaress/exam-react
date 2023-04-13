import SwipeableWrapper from './SwipeableWrapper';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import SplashPage from '../pages/SplashPage';
import EventsPage from '../pages/EventsPage';
import EventDetailsPage from '../pages/EventDetailsPage';
import OrderPage from '../pages/OrderPage';
import ConfirmationPage from '../pages/ConfirmationPage';
import TicketPage from '../pages/TicketPage';

function SwipeableRoutes() {
  const navigate = useNavigate();
  const swipeableRoutes = ['/', '/eventsPage', '/ticketPage'];

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
        <Route path="/eventsPage" element={<EventsPage />} />
        <Route path="/eventdetailspage" element={<EventDetailsPage />} />
        <Route path="/orderPage" element={<OrderPage />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
        <Route path="/ticketPage" element={<TicketPage />} />
      </Routes>
    </SwipeableWrapper>
  );
}

export default SwipeableRoutes;
