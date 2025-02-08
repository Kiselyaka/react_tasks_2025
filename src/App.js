import React from 'react';
import { nanoid } from 'nanoid'; 
import { useState } from 'react';

// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function App() {
	const [value, setValue] = useState('text');
	const [value2, setValue2] = useState('text');
	
	function handleChange(event) {
		setValue(event.target.value); 
	}

	function handleChange2(event) {
		setValue2(event.target.value); 
	}
	
	return <div>
		<input value={value} onChange={handleChange} />
		<p>text: {value}</p>
		<input value={value2} onChange={handleChange2} />
		<p>text: {value2}</p>
	</div>;
}

export default App;