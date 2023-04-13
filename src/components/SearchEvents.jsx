import styles from "./SearchEvents.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const handleSearch = (query, events, setSearchResult) => {
  const result = events.filter((event) =>
    event.name.toLowerCase().startsWith(query)
  );
  setSearchResult(result);
};

function SearchEvents() {
  const { events, setEvents, setSearchResult, searchResult } =
    useContext(DataContext);

  return (
    <section className={styles.searchEventsContainer}>
      {/* <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} /> */}
      <input
        className={styles.searchInput}
        type="search"
        name="search-input"
        placeholder="search events"
        onChange={(e) => handleSearch(e.target.value, events, setSearchResult)}
      />
    </section>
  );
}

export default SearchEvents;
