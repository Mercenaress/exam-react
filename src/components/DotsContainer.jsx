import Dot from './Dot';
import styles from './DotsContainer.module.css';

function DotsContainer({
  firstDotActive,
  secondDotActive,
  thirdDotActive,
}) {
  return (
    <section className={styles.container}>
      <Dot active={firstDotActive} />
      <Dot active={secondDotActive} />
      <Dot active={thirdDotActive} />
    </section>
  );
}

export default DotsContainer;
