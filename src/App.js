import React, { useState, useRef } from 'react';

const App = () => {
  const [textState, setTextState] = useState('text');

  const handleClickState = () => {
    setTextState(textState + '!');
  };
  const ref = useRef('text');
  const handleClickRef = () => {
    ref.current += '!';
    console.log(ref.current); 
  };

  return (
    <div>
      <h2>Использование useState</h2>
      <p>{textState}</p>
      <button onClick={handleClickState}>Добавить восклицательный знак (useState)</button>

      <h2>Использование useRef</h2>
      <p>{ref.current}</p> 
      <button onClick={handleClickRef}>Добавить восклицательный знак (useRef)</button>
    </div>
  );
};

export default App;