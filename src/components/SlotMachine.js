import React, { useState } from 'react';
import './SlotMachine.css';

const SlotMachine = () => {
  const [reels, setReels] = useState(['🍒', '🍋', '🍉']);
  const [result, setResult] = useState('');
  const [balance, setBalance] = useState(100);

  const symbols = ['🍒', '🍋', '🍉', '🍇', '🍓'];

  const spin = () => {
    if (balance <= 0) {
      setResult('Insufficient balance');
      return;
    }

    const newReels = [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];

    setReels(newReels);

    if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
      setResult('You win!');
      setBalance(balance + 50);
    } else {
      setResult('Try again!');
      setBalance(balance - 10);
    }
  };

  return (
    <div className="slot-machine">
      <h2>Slot Machine</h2>
      <div className="reels">
        {reels.map((reel, index) => (
          <div key={index} className="reel">{reel}</div>
        ))}
      </div>
      <button onClick={spin}>Spin</button>
      <p>{result}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default SlotMachine;
