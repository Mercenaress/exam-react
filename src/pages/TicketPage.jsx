import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import SingleTicket from '../components/SingleTicket';
import DotsContainer from '../components/DotsContainer';
import styles from './TicketPage.module.css';

function TicketPage() {
  const { purchasedTickets } = useContext(DataContext);
  console.log(purchasedTickets);

  if (purchasedTickets.length === 0) {
    return (
      <>
        <div className={styles.noTickets}>
          <h1>Du har inga biljetter</h1>
        </div>
        <DotsContainer
          firstDotActive={false}
          secondDotActive={false}
          thirdDotActive={true}
        />
      </>
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
      <DotsContainer
        firstDotActive={false}
        secondDotActive={false}
        thirdDotActive={true}
      />
    </>
  );
}

export default TicketPage;
