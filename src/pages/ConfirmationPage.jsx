import GreenButton from '../components/GreenButton';
import styles from './ConfirmationPage.module.css';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/ticketPage');
  };

  return (
    <div className={styles.confirmationPage}>
      <div className={styles.confirmationHero}>
        <img src={logo} />
        <h1>
          Tack <br /> för din beställning
        </h1>
      </div>

      <GreenButton
        handleClick={handleClick}
        buttonText="Till biljetterna →"
      />
    </div>
  );
}

export default ConfirmationPage;
