import React from 'react';

function App() {
	function show(num) {
		alert("Выводим " + num);
	}
	
	return <div>
		<button onClick={() => show(1)}>act1</button> <br />
		<button onClick={() => show(2)}>act2</button> <br />
		<button onClick={() => show(3)}>act2</button>
	</div>;
}

export default App;