import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');
	
  const addNote = () => {
    setNotes([...notes, notes.length + 1]);
  };

  const addNote2 = () => {
    if (inputValue.trim() !== '') { 
      setNotes([...notes, inputValue]); 
      setInputValue(''); 
    }
  };

	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	
	return <div>
    <div>
      Задача 1:
		<ul>
			{result}
		</ul>
    <button onClick={addNote}>Добавить элемент</button>
    </div>
    <div>
      Задача 2: <br />
      <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Введите текст" 
        />
        <button onClick={addNote2}>Добавить заметку</button> 
    </div>
	</div>;
}

export default App;