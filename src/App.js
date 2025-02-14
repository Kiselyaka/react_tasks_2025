import React, { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState(''); 

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  function show() {
    if (checked) {
      setMessage('Привет, старый друг'); 
    } else {
      setMessage('Вы не нажали на чекбокс');
    }
  }

  return (
    <div>
      <div>
        Задание 1:
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
      <button onClick={show}>Показать сообщение</button>
      <p>{message}</p> 
    </div>
    <div>
      Задание 2: <br />
      Выберите языки программирования, которые вы знаете: <br />
      Если вы знаете html, проставте галочку:
      <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} />
      {checked1 ? <p>О, супер. Вы знаете html, жаль что это не язык программирования</p> : <p>не отмечен</p>}

       Если вы знаете js, проставте галочку:
      <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />
       {checked2 ? <p>О, супер. Вы знаете js</p> : <p>не отмечен</p>}

      Если вы знаете css, проставте галочку:
      <input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)} />
      {checked3 ? <p>О, супер. Вы знаете css, жаль что это не язык программирования</p> : <p>не отмечен</p>}
    </div>
    </div>
  );
}

export default App;