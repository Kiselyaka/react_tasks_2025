import React from 'react';
import { nanoid } from 'nanoid'; 
import { useState } from 'react';

// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function App() {
	const [isBanned, setIsBanned] = useState(false);
	
	return (
		<div>
			<span>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</span>
			{isBanned ? (
				<button onClick={() => setIsBanned(false)}>Разбанить</button>
			) : (
				<button onClick={() => setIsBanned(true)}>Забанить</button>
			)}
		</div>
	);
}

export default App;