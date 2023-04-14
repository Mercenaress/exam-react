import styles from './Ticket.module.css';
import addIcon from '../assets/add.svg';
import subtractIcon from '../assets/subtract.svg';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Ticket({ ticket }) {
  const { updateTicketQuantity, removeTicketFromCart } =
    useContext(CartContext);

  const handleQuantityChange = (ticketID, newQuantity) => {
    if (newQuantity <= 0) {
      removeTicketFromCart(ticketID);
    } else {
      updateTicketQuantity(ticketID, newQuantity);
    }
  };

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.ticketTitle}>
        <h2>{ticket.name}</h2>
        <p className={styles.ticketDate}>
          {ticket.when.date} {ticket.when.from} - {ticket.when.to}
        </p>
      </div>
      <div className={styles.ticketQuantityBox}>
        <div
          onClick={() =>
            handleQuantityChange(ticket.id, ticket.quantity - 1)
          }
        >
          <img src={subtractIcon} alt="subtract quantity" />
        </div>
        <div className={styles.ticketQuantity}>
          <input
            type="number"
            value={ticket.quantity}
            onChange={(e) =>
              handleQuantityChange(ticket.id, parseInt(e.target.value))
            }
          />
        </div>
        <div
          onClick={() =>
            handleQuantityChange(ticket.id, ticket.quantity + 1)
          }
        >
          <img src={addIcon} alt="add quantity" />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
