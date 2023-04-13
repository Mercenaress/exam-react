import styles from './EventPriceSummary.module.css'

function EventPriceSummary({priceSummary, ticketAmount}) {
    return ( 
        <section className={styles.EventPriceSummary}>
            <p className={styles.PriceSummaryText}>{priceSummary}</p>
            <section className={styles.EventTicketAmount}>
                <button>-</button>
                <p>{ticketAmount}</p>
                <button>+</button>
            </section>
        </section>
     );
}

export default EventPriceSummary;