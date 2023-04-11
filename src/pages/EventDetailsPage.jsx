import GreenButton from "../components/GreenButton";

function EventDetailsPage() {
    return ( 
        <>
        <h3>Event</h3>
        <p>You are about to score some tickets to</p>
        <h2>Lasse-Stefanz</h2>
        <p>21 mars kl 19:00-21:00</p>
        <p>@Kjell Härnqvistsalen</p>

        <GreenButton buttonText={"Lägg i varukorgen"} />
        </>
     );
}

export default EventDetailsPage;