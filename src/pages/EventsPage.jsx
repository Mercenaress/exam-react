import { useContext } from 'react';
import { EventContext } from '../App';
import SingleEvent from '../components/SingleEvent';
import SearchEvents from '../components/SearchEvents'
import styles from './EventsPage.module.css';

function EventsPage() {
  const [event, setEvent] = useContext(EventContext);
  if (event) {
    return (
        <>
        <h1 className={styles.header} >Events</h1>
        <SearchEvents />

          {event.events.map((ev) => {
          return <SingleEvent event={ev} />;
        })}
        
        </>

      ) 
      
  }
  
}

export default EventsPage;