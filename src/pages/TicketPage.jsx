
import React from "react";
import styles from "../pages/TicketPage.module.css";
import barcode from '../assets/barcode.svg'

function TicketPage() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.ticketPage}>
      <article className={styles.ticketPageName}>
        <p>What</p>
        <h1>Lasse Stefanz</h1>
      </article>
<div className={styles.ticketPageCommonBg}>
<article className={styles.ticketPagePlace}>
        <p>Where</p>
        <h3>Kjell härnqvistsalen</h3>
        <p>Göteborgs universitet. Pedagogen, hus A</p>
      </article>
      
      <article className={styles.ticketPageTime}>
        <div>
          <p className={styles.ticketPageTimeText}>When</p>
          <p className={styles.ticketPageTimeTime}>21 Mar</p>
        </div>
        <div className={styles.ticketPageTimeBorder}>
          <p className={styles.ticketPageTimeText}>From</p>
          <p className={styles.ticketPageTimeTime}>19:00</p>
        </div>
        <div>
          <p className={styles.ticketPageTimeText}>To</p>
          <p className={styles.ticketPageTimeTime}>21:00</p>
        </div>
      </article>

      <article className={styles.ticketPageInfo}>
        <p>INFO</p>
        <p>Section C - seat 233, bring umbrella</p>
      </article>

    
      
      <article className={styles.ticketPageBar}>
        <img src={barcode} alt="logo img" />
        <p>#A2ED7</p>
      </article>
    </div>
    </div>
    </div>
    
  
  );
}

export default TicketPage;

