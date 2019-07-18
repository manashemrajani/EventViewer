import React from 'react';
import EventList from "./components/EventList";
import EventViewer from "./components/EventViewer";
import Tabs from "./components/Tabs";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs></Tabs>
        <div>
          <EventViewer></EventViewer>
          <EventList></EventList>
        </div>
      </header>
    </div>
  );
}

export default App;
