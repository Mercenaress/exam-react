import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import SingleTicket from '../components/SingleTicket';

function TicketPage() {
  const { purchasedTickets } = useContext(DataContext);
  console.log(purchasedTickets);

  if (purchasedTickets.length === 0) {
    return (
      <div className='no-tickets'>
        <h1>Du har inga biljetter</h1>
      </div>
    );
  }

  return (
    <>
      {purchasedTickets.flatMap((ticket) => {
        const ticketsToRender = [];
        for (let i = 0; i < ticket.quantity; i++) {
          ticketsToRender.push(
            <SingleTicket key={`${ticket.id}-${i}`} ticket={ticket} />
          );
        }
        return ticketsToRender;
      })}
    </>
  );
}

export default TicketPage;
