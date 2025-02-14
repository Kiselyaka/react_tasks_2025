import React, { useState } from 'react';

function App() {
	const [checked, setChecked] = useState(true);
	let message;
  const [checked2, setChecked2] = useState(true);
  let message2;
  
  if (checked2){
    message2 = <p>Опа, абзац показался</p>
  }

	if (checked) {
		message = <div>
    <h2>Ура, вам уже есть 18</h2>
    <p>
      здесь расположен контент только для взрослых
    </p>
  </div>;
	} else {
		message = <div>
    <p>
      увы, вам еще нет 18 лет:(
    </p>
  </div>;
	}

	// код не копируй, да
	
  return <div>
    <div>
    Задание 1: <br />
    Подтвердите, что вам есть 18 лет: 
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<div>{message}</div>
    </div>
    <div>
      Задание 2: <br />
      Попробуйте нажать на галочку: 
      <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />
      <div>{message2}</div>
    </div>
	</div>;
}

export default App;