import React, { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState('Начальное значение');


  return (
    <div>
    <div>
      <h2>Чекбокс с начальным состоянием</h2>
      <input type="checkbox" defaultChecked={!checked} />
      <label>Чекбокс по умолчанию отмечен</label>
    </div>
    <div>
    <h2>Текстовое поле с начальным значением</h2>
    <input defaultValue={value} />
  </div>
  </div>
  );
}

export default App;