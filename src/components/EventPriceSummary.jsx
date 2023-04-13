import styles from './EventPriceSummary.module.css'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'
import { useContext, useState } from 'react';
import TicketPage from '../pages/TicketPage';

function EventPriceSummary({priceSummary}) {

    const [ticketAmount, setTicketAmount] = useState(1);
    const decrementCounter = () => setTicketAmount(prevTicketAmount => {
        if(prevTicketAmount <=1 ) {
            return prevTicketAmount
        } else {return prevTicketAmount -1}
    });
    const incrementCounter = () => setTicketAmount(ticketAmount +1);

    const handleChange = (amount) => setTicketAmount(amount);

    return ( 
        <section className={styles.EventPriceSummary}>
            <p className={styles.PriceSummaryText}>{priceSummary}</p>
            <form className={styles.EventTicketAmount}>
                <button type='button' onClick={decrementCounter}><img src={minus} alt="" /></button>
                <input type="number" id='ticketCounter' onChange={(e) => handleChange(parseInt(e.target.value))} value={ticketAmount}/>
                <button type='button' onClick={incrementCounter}><img src={plus} alt="" /></button>
            </form>
        </section>
     );
}

export default EventPriceSummary;