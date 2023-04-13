

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SingleEvent from "../components/SingleEvent";
import SearchEvents from "../components/SearchEvents";
import styles from "./EventsPage.module.css";

function EventsPage() {
  const { events, searchResult } = useContext(DataContext);
  return (
    <>
      <h1 className={styles.header}>Events</h1>
      <SearchEvents />

      {searchResult && searchResult.length == 0 ? (
        <p className={styles.noResult}>Inga resultat</p>
      ) : (
        ""
      )}

      {searchResult
        ? searchResult.map((ev) => {
            return <SingleEvent key={ev.id} event={ev} />;
          })
        : events.map((ev) => {
            return <SingleEvent key={ev.id} event={ev} />;
          })}
    </>
  );
}

export default EventsPage;

