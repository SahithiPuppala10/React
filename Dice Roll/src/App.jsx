// src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [rolls, setRolls] = useState([]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setRolls([...rolls, randomNumber]);
  };

  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <button onClick={rollDice}>Roll Dice</button>
      <h2>Roll History</h2>
      {rolls.length === 0 ? (
        <p>No rolls yet. Click "Roll Dice" to start!</p>
      ) : (
        <ol>
          {rolls.map((roll, index) => (
            <li key={index}>Roll {index + 1}: {roll}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;