function SingleEvent({ event }) {
    return (
      <div className="event-component">
        <article className="event-componentcontainer">
          <section className="event-componentcontainer--date">
            <p>{event.when.date}</p>
          </section>
          <section className="event-componentcontainer--info">
            <h4>{event.name}</h4>
            <p>{event.where}</p>
            <p>{event.when.from}</p>
            <p>{event.when.to}</p>
          </section>
          <section className="event-componentcontainer--price">
            <p>{event.price}</p>
          </section>
        </article>
      </div>
    );
  }
  
  export default SingleEvent;