import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;

    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, [backgroundColor]);

  return (
    <div onClick={handleClick} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Кликните где угодно, чтобы изменить фон!</h1>
    </div>
  );
}

export default App;