import React from 'react';
import './App.css';
import TeamList from "./components/TeamList"
import TeamNav from "./components/TeamNav"

function App() {
  return (
    <div className="App">
      <TeamNav />
      <TeamList />
    </div>
  );
}

export default App;
