import React, { useState } from 'react';

function TemperatureConverter() {
  const [fahrenheit, setFahrenheit] = useState(32); 

  const handleFahrenheitChange = (event) => {
    setFahrenheit(event.target.value); 
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9; 
  };

  const celsius = fahrenheitToCelsius(fahrenheit); 

  return (
    <div>
      <label>
        Температура в Фаренгейтах:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </label>
      <p>Температура в Цельсиях: {celsius.toFixed(2)}</p>
    </div>
  );
}

export default TemperatureConverter;