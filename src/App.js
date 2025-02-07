import React from 'react';

function App() {
	const arr = ['a', 'b', 'c', 'd', 'e'];
	
	const res = arr.map(function(item, index) {
		return <li key={index}>{item}</li>;
	});
	
	return <div>
		<ul>
		{res}
		</ul>
	</div>;

}

export default App;