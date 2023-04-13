

import styles from './GreenButton.module.css';

function GreenButton({ buttonText, handleClick }) {
  return (
    <button onClick={handleClick} className={styles.GreenButton}>
      {buttonText}
    </button>
  );
}

export default GreenButton;

