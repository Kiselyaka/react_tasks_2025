import React from 'react';

function TempInp({ temp, setTemp }) {
  return (
    <div>
      <label>
        Введите температуру:
        <input 
          type="number" 
          value={temp} 
          onChange={event => setTemp(event.target.value)} // Обновляем состояние в App.js
        />
      </label>
    </div>
  );
}

export default TempInp;