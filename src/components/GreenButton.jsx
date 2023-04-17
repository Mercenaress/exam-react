import styles from './GreenButton.module.css';

function GreenButton({ buttonText, handleClick, className }) {
  return (
    <button
      onClick={handleClick}
      className={`${className} ${styles.GreenButton}`}
    >
      {buttonText}
    </button>
  );
}

export default GreenButton;
