function EventPriceSummary({priceSummary, ticketAmount}) {
    return ( 
        <>
        <p>{priceSummary}</p>
        <section>
            <button>-</button>
            <p>{ticketAmount}</p>
            <button>+</button>
        </section>
        </>
     );
}

export default EventPriceSummary;