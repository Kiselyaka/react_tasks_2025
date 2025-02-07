import React from 'react';

function App() {
	const isAuth = false;
	
	return <div>
		{!isAuth && <p>пожалуйста, авторизуйтесь. Код не копируй -_-</p>}
	</div>;
}

export default App;