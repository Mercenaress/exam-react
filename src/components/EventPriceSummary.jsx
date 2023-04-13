import styles from './EventPriceSummary.module.css';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import { useContext, useState } from 'react';
import GreenButton from './GreenButton';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function EventPriceSummary({ priceSummary, event }) {
  const navigate = useNavigate();
  const { addTicketToCart } = useContext(CartContext);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const totalAmount = ticketQuantity * event.price;

  const decrementCounter = () =>
    setTicketQuantity((prevTicketQuantity) => {
      if (prevTicketQuantity <= 1) {
        return prevTicketQuantity;
      } else {
        return prevTicketQuantity - 1;
      }
    });
  const incrementCounter = () => setTicketQuantity(ticketQuantity + 1);

  const handleChange = (amount) => {
    if (Number.isNaN(amount) || amount < 1) {
      setTicketQuantity(1);
    } else {
      setTicketQuantity(amount);
    }
  };

  const handleAddToCart = () => {
    addTicketToCart(event, ticketQuantity);
    navigate('/orderpage');
  };

  return (
    <>
      <section className={styles.EventPriceSummary}>
        <p className={styles.PriceSummaryText}>{totalAmount}</p>
        <form className={styles.EventTicketAmount}>
          <button type="button" onClick={decrementCounter}>
            <img src={minus} alt="" />
          </button>
          <input
            type="number"
            id="ticketCounter"
            onChange={(e) => handleChange(parseInt(e.target.value))}
            value={ticketQuantity}
          />
          <button type="button" onClick={incrementCounter}>
            <img src={plus} alt="" />
          </button>
        </form>
      </section>
      <div className={styles.grow}></div>
      <GreenButton
        handleClick={() => handleAddToCart()}
        buttonText={'Lägg i varukorgen'}
      />
    </>
  );
}

export default EventPriceSummary;
