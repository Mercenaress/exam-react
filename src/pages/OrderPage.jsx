import Ticket from '../components/Ticket';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className={styles.content}>
        <h1>Order</h1>
        <div className={styles.ticketsContainer}>
          {cartTickets &&
            cartTickets.map((ticket) => (
              <Ticket key={ticket.name} ticket={ticket} />
            ))}
          {cartTickets.length === 0 && (
            <p className={styles.emptyCart}>Kundvagnen är tom</p>
          )}
        </div>
        <div className={styles.orderTotals}>
          <p className={styles.orderTotalsText}>Totalt värde på order</p>
          <p className={styles.orderTotal}>{cartTotal} sek</p>
          <GreenButton
            handleClick={handleOrder}
            buttonText="Skicka order"
          />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
