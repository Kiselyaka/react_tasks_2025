import React from 'react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Мой новый заголовок страницы';
    document.body.style.backgroundColor = 'green';
  }, []); 

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;