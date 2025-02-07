import React from 'react';

function App() {
	let text;
	const isAdult = true;
	
	if (isAdult) {
		text = <p>text true</p>;
	}
	else{
		text = <p>text false</p>
	}
	
	return <div>
		{text}
	</div>;
}

export default App;