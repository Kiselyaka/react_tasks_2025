import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<select value={value} onChange={handleChange}>
			<option>Симферополь</option>
			<option>Ялта</option>
			<option>Москва</option>
			<option>Санкт-Петербург</option>
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}

export default App;