import TicketCartItem from '../components/TicketCartItem';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.svg';

import styles from './OrderPage.module.css';
import GreenButton from '../components/GreenButton';

function OrderPage() {
  const navigate = useNavigate();
  const { cartTickets, cartTotal, submitOrder } = useContext(CartContext);

  const handleOrder = () => {
    submitOrder();
    navigate('/confirmationpage');
  };

  return (
    <div className={styles.container}>
      <Link to="/eventspage">
        <button className={styles.BackButton}>
          <img src={arrow} alt="" />
        </button>
      </Link>
      <div className={styles.content}>
        <h1>Order</h1>
        <div className={styles.ticketsContainer}>
          {cartTickets &&
            cartTickets.map((ticket) => (
              <TicketCartItem key={ticket.name} ticket={ticket} />
            ))}
          {cartTickets.length === 0 && (
            <p className={styles.emptyCart}>Kundvagnen är tom</p>
          )}
        </div>
   { cartTickets.length > 0 &&    <div className={styles.orderTotals}>
          <p className={styles.orderTotalsText}>Totalt värde på order</p>
          <p className={styles.orderTotal}>{cartTotal} sek</p>
          <GreenButton
            handleClick={handleOrder}
            buttonText="Skicka order"
          />
        </div>}
      </div>
    </div>
  );
}

export default OrderPage;
