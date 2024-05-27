import React from 'react';
import SlotMachine from './components/SlotMachine';
import Leaderboard from './components/Leaderboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Solana Slot Machine Game</h1>
      <SlotMachine />
      <Leaderboard />
    </div>
  );
};

export default App;
