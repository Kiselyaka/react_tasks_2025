import React from 'react';
import { nanoid } from 'nanoid'; 
// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function id() {
  return nanoid(); 
}

function App() 
{
  const uniqueId = id();

  return (
    <div>
      <h1>Сгенерированный ID: {uniqueId}</h1>
    </div>
  );
}

export default App;