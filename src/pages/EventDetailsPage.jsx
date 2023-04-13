import EventPriceSummary from '../components/EventPriceSummary';
import styles from './EventDetailsPage.module.css';
import { useLocation } from 'react-router-dom';

function EventDetailsPage() {
  const location = useLocation();
  const event = location.state.event;

  console.log(event);
  return (
    <div className={styles.EventDetailsPage}>
      <h1>Event</h1>
      <p className={styles.HeadText}>
        You are about to score <br /> some tickets to
      </p>
      <section>
        <h2>{event.name}</h2>
        <p className={styles.TealText}>
          {event.when.date} kl {event.when.from}-{event.when.to}
        </p>
        <p className={styles.LocationText}>@{event.where}</p>
      </section>
      <EventPriceSummary event={event} />
    </div>
  );
}

export default EventDetailsPage;
