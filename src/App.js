import React from 'react';

function App() {
	const age = 19;
	
	return <div>
		{age > 18 ? <p>пользователю больше 18</p> : <p>пользователю меньше 18 или 18</p>}
	</div>;
}

export default App;