import styles from './Dot.module.css';

function Dot({ active }) {
  return (
    <figure
      className={
        active
          ? `${styles.dot} ${styles.active}`
          : `${styles.dot} ${styles.inactive}`
      }
    ></figure>
  );
}

export default Dot;
