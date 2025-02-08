import React from 'react';
import { nanoid } from 'nanoid'; 
import { useState } from 'react';

// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function App() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return (
		<div>
			<input value={value} onChange={handleChange} />
			<p>Количество символов: {value.length}</p>
		</div>
	);
}

export default App;