import { useState, useEffect, createContext } from "react";
import "./App.css";
import EventsPage from "./pages/EventsPage";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <EventsPage />
      </DataProvider>
    </div>
  );
}

export default App;
