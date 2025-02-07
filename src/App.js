import React from 'react';

function App()
{
	function getDigitsSum(sum){
		return String(sum).split('').reduce((acc, digit) => acc + +digit, 0);
	}
	const sum = getDigitsSum(123)
	return <div>
		сумма цифр переданного числа 123: {sum}
	</div>;
}

export default App;