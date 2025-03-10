import React, { useState } from 'react';
import Parent from './Parent';
import { MyContext } from './MyContext';
import './styles.css'; 

function App() {
  const [age, setAge] = useState(50); 

  return (
    <MyContext.Provider value={{ age, setAge }}>
      <h1>Контекст в React</h1>
      <Parent />
      <button onClick={() => setAge((prevAge) => prevAge - 2)}>Уменьшить возраст на 2</button>
    </MyContext.Provider>
  );
}

export default App;