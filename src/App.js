import React, { useState } from 'react';
import TempInp from './TempInp';
import Verdict from './Verdict';

function App() {
  const [temp, setTemp] = useState(0); 

  return (
    <div>
      <h1>Калькулятор состояния воды</h1>
      <TempInp temp={temp} setTemp={setTemp} /> 
      <Verdict temp={temp} /> 
    </div>
  );
}

export default App;