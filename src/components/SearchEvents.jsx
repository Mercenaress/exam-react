import styles from './SearchEvents.module.css';
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

const handleSearch = (query, events, setSearchResult) => {
  const result = events.filter((event) =>
    event.name.toLowerCase().startsWith(query.toLowerCase())
  );
  setSearchResult(result);
};

function SearchEvents() {
  const { events, setSearchResult, query, setQuery } = useContext(DataContext);


  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    handleSearch(inputValue, events, setSearchResult);
  };

  return (
    <section className={styles.searchEventsContainer}>
      <input
        className={query ? `${styles.searchInput} ${styles.searchInputActive}` : `${styles.searchInput}`}
        type="search"
        name="search-input"
        onChange={handleInputChange}
        value={query}
      />
    </section>
  );
}

export default SearchEvents;
