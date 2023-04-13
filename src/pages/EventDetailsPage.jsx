import EventPriceSummary from "../components/EventPriceSummary";
import GreenButton from "../components/GreenButton";
import styles from './EventDetailsPage.module.css'

function EventDetailsPage() {
    return ( 
        <div className={styles.EventDetailsPage}>
        <h3>Event</h3>
        <p className={styles.HeadText} >You are about to score <br/> some tickets to</p>
        <section>
            <h2>Lasse-Stefanz</h2>
            <p className={styles.TealText} >21 mars kl 19:00-21:00</p>
            <p className={styles.LocationText} >@Kjell Härnqvistsalen</p>
        </section>
        <EventPriceSummary priceSummary={"1050 sek"} ticketAmount={1} />
        <GreenButton buttonText={"Lägg i varukorgen"} />
        </div>
     );
}

export default EventDetailsPage;