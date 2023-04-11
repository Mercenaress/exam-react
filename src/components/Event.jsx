import { useContext } from "react";
import { EventContext } from "../App";
function Event() {
    const [event, setEvent] = useContext(EventContext)
    // return ( 
    //     event.events.map((ev) => {
    //         <div className="event-component">
    //             <article className="event-component__container">
    //                 <section className="event-component__container--date">
    //                     <p>{ev.when.date}</p>
        
    //                 </section>
    //                 <section className="event-component__container--info">
    //                     <h4>{ev.name}</h4>
    //                     <p>{ev.where}</p>
    //                     <p>{ev.when.from}</p>
    //                     <p>{ev.when.to}</p>
    //                 </section>
    //                 <section className="event-component__container--price">
    //                     <p>{ev.price}</p>
    //                 </section>
    //             </article>
    //         </div>

    //     })
    
    //  );
    console.log(events)
    
}

export default Event;