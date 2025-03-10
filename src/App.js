import React from 'react';
import { MyContext } from './MyContext.js';

function App() {
  return (
    <MyContext.Provider value={{ /* Здесь можно указать данные, которые вы хотите передать */ }}>
      <div>
        <h1>Пример использования контекста</h1>
      </div>
    </MyContext.Provider>
  );
}

export default App;