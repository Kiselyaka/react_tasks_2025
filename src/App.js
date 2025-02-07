import React from 'react';

function App() {
  function handleClick1(event) {
    console.log(event); 
  }

  function handleClick2(event) {
    console.log(event.target); 
  }
  
  return (
    <div>
      <h2>Задание 1:</h2>
      <button onClick={handleClick1}>act</button>
      
      <h2>Задание 2:</h2>
      <button onClick={handleClick2}>act</button>
    </div>
  );
}

export default App;