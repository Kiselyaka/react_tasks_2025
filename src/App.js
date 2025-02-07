import React from 'react';

function App()
{
	function getDigitsSum(sum){
		return String(sum).split('').reduce((acc, digit) => acc + +digit, 0);
	}
	
	return <div>
		сумма цифр переданного числа 12345: {getDigitsSum(12345)}
	</div>;
}

export default App;