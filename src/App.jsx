import { useState, useEffect, createContext } from "react";
import "./App.css";
import EventsPage from "./pages/EventsPage";
import Confirmation from "./pages/ConfirmationPage";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Confirmation />
      </DataProvider>
    </div>
  );
}

export default App;
