import React from 'react';
import { nanoid } from 'nanoid'; 
import { useState } from 'react';

// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function App() {
	const [count, setCount] = useState(0);
	
	function clickLow() {
		setCount(count - 1);
	}
	function clickUp() {
		setCount(count + 1);
	}
	
	
	return <div>
		<span>{count}</span>
		<button onClick={clickUp}>увеличить значение</button>
		<button onClick={clickLow}>уменьшить значение</button>
	</div>;
}

export default App;