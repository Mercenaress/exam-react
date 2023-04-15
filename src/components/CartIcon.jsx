import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../assets/cartIcon.svg';
import styles from './CartIcon.module.css';

function CartIcon() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/orderpage');
  };

  const { cartTickets } = useContext(CartContext);
  return (
    <div className={styles.cartContainer} onClick={handleClick}>
      <div className={styles.cartIcon}>
        <img src={cartIcon} alt="" />
      </div>
      {cartTickets.length > 0 && (
        <div className={styles.cartQuantity}>{cartTickets.length}</div>
      )}
    </div>
  );
}

export default CartIcon;
