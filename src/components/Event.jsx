import { useContext } from 'react';
import { EventContext } from '../App';
import SingleEvent from './SingleEvent';

function Event() {
  const [event, setEvent] = useContext(EventContext);
  if (event) {
    return event.events.map((ev) => {
      return <SingleEvent event={ev} />;
    });
  }
}

export default Event;