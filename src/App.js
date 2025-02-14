import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState(1);
	
	function changeHandler(event) {
		setValue(event.target.value);
	}

  const [language, setLanguage] = useState('');

  function changeHandler2(event) {
    setLanguage(event.target.value);
  }
	
	return <div>
    Задание 1:
    <div>
		<input
			type="radio"
			name="radio"
			value="1"
			checked={value === '1' ? true : false}
			onChange={changeHandler}
		/>
		<input
			type="radio"
			name="radio"
			value="2"
			checked={value === '2' ? true : false}
			onChange={changeHandler}
		/>
		<input
			type="radio"
			name="radio"
			value="3"
			checked={value === '3' ? true : false}
			onChange={changeHandler}
		/>

    <p>Вы выбрали: {value}</p>
    </div>
    <div>
      Задание 2:
    <div>
      <h2>Какой ваш любимый язык программирования?</h2>
      
      <input
        type="radio"
        name="language"
        value="JavaScript"
        checked={language === 'JavaScript'}
        onChange={changeHandler2}
      />
      <label>JavaScript</label>
      
      <input
        type="radio"
        name="language"
        value="Python"
        checked={language === 'Python'}
        onChange={changeHandler2}
      />
      <label>Python</label>
      
      <input
        type="radio"
        name="language"
        value="Java"
        checked={language === 'Java'}
        onChange={changeHandler2}
      />
      <label>Java</label>

      <p>
        Ваш любимый язык программирования: {language}
      </p>

      {language === 'JavaScript' && <p>О, вы выбрали: JavaScript. JavaScript — это замечательный язык программирования</p>}
    </div>
    </div>
	</div>
}

export default App;