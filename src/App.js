import React from 'react';
import { nanoid } from 'nanoid'; 
import { useState } from 'react';

// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function App() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);
	const [value4, setValue4] = useState(0);
	const [value5, setValue5] = useState(0);

	function handleChange1(event) {
		setValue1(+event.target.value);
	}

	function handleChange2(event) {
		setValue2(+event.target.value);
	}

	function handleChange3(event) {
		setValue3(+event.target.value);
	}

	function handleChange4(event) {
		setValue4(+event.target.value);
	}

	function handleChange5(event) {
		setValue5(+event.target.value);
	}

	const sum = value1 + value2 + value3 + value4 + value5;
	const average = sum / 5;

	return (
		<div>
			<input type="number" value={value1} onChange={handleChange1} />
			<input type="number" value={value2} onChange={handleChange2} />
			<input type="number" value={value3} onChange={handleChange3} />
			<input type="number" value={value4} onChange={handleChange4} />
			<input type="number" value={value5} onChange={handleChange5} />
			<p>Average: {isNaN(average) ? 0 : average}</p>
		</div>
	);
}

export default App;