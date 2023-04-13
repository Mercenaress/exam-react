import styles from './EventPriceSummary.module.css'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'

function EventPriceSummary({priceSummary, ticketAmount}) {
    return ( 
        <section className={styles.EventPriceSummary}>
            <p className={styles.PriceSummaryText}>{priceSummary}</p>
            <section className={styles.EventTicketAmount}>
                <button><img src={minus} alt="" /></button>
                <p>{ticketAmount}</p>
                <button><img src={plus} alt="" /></button>
            </section>
        </section>
     );
}

export default EventPriceSummary;