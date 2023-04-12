import { useState, useEffect, createContext } from 'react'
import './App.css'
import EventsPage from './pages/EventsPage'
export const EventContext = createContext();

function App() {
  const API_URL = 'https://majazocom.github.io/Data/events.json'
  const [event, setEvent] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error(error))
  }, []);

  return (
    <div className="App">
      <EventContext.Provider value={[event, setEvent]}>
        <EventsPage />
      </EventContext.Provider>
    </div>
  )
}

export default App
