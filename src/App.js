import React from 'react';

function App() {
	const num1 = 3;
	const num2 = 2;
	const num = 4;
	const name = 'john';
	const surname = 'smit';
	
	return <div>
	Задание 1 -	result: {num1 ** num2} // num1 в степени num2 <br />
	Задание 2 -	result: {name + ' ' + surname} // john"пробел"smit <br />
	Задание 3 -	result: {Math.sqrt(num)} // корень из num
	</div>;
}

export default App;