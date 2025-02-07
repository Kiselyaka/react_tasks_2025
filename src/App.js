import React from 'react';

function App() {
	let text;
	const isAdmin = true;
	
	if (isAdmin) {
		text = <p>пользователь является администратором</p>;
	} 
	
	return text;
}

export default App;