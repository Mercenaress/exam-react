import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../assets/cartIcon.svg';
import styles from './CartButton.module.css';

function CartButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/orderpage');
  };

  const { cartTickets } = useContext(CartContext);
  let productQuantity = 0;

  if (cartTickets.length > 0) {
    productQuantity = cartTickets.reduce((total, ticket) => {
      return total + ticket.quantity;
    }, 0);
  }

  return (
    <div className={styles.cartContainer} onClick={handleClick}>
      <div className={styles.cartIcon}>
        <img src={cartIcon} alt="Cart icon" />
      </div>
      {cartTickets.length > 0 && (
        <div className={styles.cartQuantity}>{productQuantity}</div>
      )}
    </div>
  );
}

export default CartButton;
