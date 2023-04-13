import styles from "./SingleEvent.module.css";
function SingleEvent({ event }) {
  return (
    <>
      <article className={styles.eventComponentContainer}>
        <section className={styles.eventComponentContainerDate}>
          <p>{event.when.date}</p>
        </section>

        <section>
          <section className={styles.eventComponentContainerInfo}>
            <h3>{event.name}</h3>
            <p>{event.where}</p>
          </section>

          <section className={styles.eventComponentContainerTimePrice}>
            <p>
              {event.when.from} - {event.when.to}
            </p>
            <p className={styles.eventComponentPrice}>{event.price} sek</p>
          </section>
          <div className={styles.breakLine}></div>
        </section>
      </article>
    </>
  );
}

export default SingleEvent;
