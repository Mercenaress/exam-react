import EventPriceSummary from "../components/EventPriceSummary";
import GreenButton from "../components/GreenButton";
import styles from './EventDetailsPage.module.css'

function EventDetailsPage() {
    return ( 
        <div className={styles.EventDetailsPage}>
        <h3>Event</h3>
        <p>You are about to score some tickets to</p>
        <section>
            <h2>Lasse-Stefanz</h2>
            <p>21 mars kl 19:00-21:00</p>
            <p>@Kjell Härnqvistsalen</p>
        </section>
        <EventPriceSummary priceSummary={"1050 sek"} ticketAmount={1} />
        <GreenButton buttonText={"Lägg i varukorgen"} />
        </div>
     );
}

export default EventDetailsPage;