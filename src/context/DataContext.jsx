import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

const API_URL = 'https://majazocom.github.io/Data/events.json';

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [purchasedTickets, setPurchasedTickets] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const modifiedData = data.events.map((ev, index) => ({
          ...ev,
          id: index + 1,
        }));
        setEvents(modifiedData);
      })
      .catch((error) => console.error(error));
  }, []);

  if (events) {
    return (
      <DataContext.Provider
        value={{
          events,
          setEvents,
          searchResult,
          setSearchResult,
          purchasedTickets,
          setPurchasedTickets,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
};
