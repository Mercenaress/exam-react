import styles from './SingleTicket.module.css';
import barcode from '../assets/barcode.svg';

function SingleTicket({ ticket }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.ticketPage}>
          <article className={styles.ticketPageName}>
            <p>
              <strong>WHAT</strong>
            </p>
            <h1>{ticket.name}</h1>
          </article>
          <div className={styles.ticketPageCommonBg}>
            <article className={styles.ticketPagePlace}>
              <p>
                <strong>WHERE</strong>
              </p>
              <h3>{ticket.where}</h3>
              <p>Göteborgs universitet. Pedagogen, hus A</p>
            </article>

            <article className={styles.ticketPageTime}>
              <div>
                <p className={styles.ticketPageTimeText}>WHEN</p>
                <p className={styles.ticketPageTimeTime}>
                  {ticket.when.date}
                </p>
              </div>
              <div className={styles.ticketPageTimeBorder}>
                <p className={styles.ticketPageTimeText}>FROM</p>
                <p className={styles.ticketPageTimeTime}>
                  {ticket.when.from}
                </p>
              </div>
              <div>
                <p className={styles.ticketPageTimeText}>TO</p>
                <p className={styles.ticketPageTimeTime}>
                  {ticket.when.to}
                </p>
              </div>
            </article>

            <article className={styles.ticketPageInfo}>
              <p>
                <strong>INFO</strong>
              </p>
              <p>Section C - seat 233, bring umbrella</p>
            </article>

            <article className={styles.ticketPageBar}>
              <img src={barcode} alt="logo img" />
              <p>#A2ED7</p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleTicket;
