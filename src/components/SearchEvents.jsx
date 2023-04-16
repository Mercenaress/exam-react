import styles from './SearchEvents.module.css';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const handleSearch = (query, events, setSearchResult) => {
  const result = events.filter((event) =>
    event.name.toLowerCase().startsWith(query.toLowerCase())
  );
  setSearchResult(result);
};

function SearchEvents() {
  const { events, setSearchResult } = useContext(DataContext);

  return (
    <section className={styles.searchEventsContainer}>
      <input
        className={styles.searchInput}
        type="search"
        name="search-input"
        onChange={(e) =>
          handleSearch(e.target.value, events, setSearchResult)
        }
      />
    </section>
  );
}

export default SearchEvents;
