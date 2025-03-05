import React from 'react';
import Employee from './Employee'; // Импортируем компонент Employee
import Product from './Product'; 

function App() {
	const name1  = 'product1';
	const cost1 = '100';
	
	const name2  = 'product2';
	const cost2 = '100';
	
	const name3  = 'product3';
	const cost3 = '100';
	
	return <div>
		<Product name={name1} cost={cost1} />
		<Product name={name2} cost={cost2} />
		<Product name={name3} cost={cost3} />
	</div>;
}

export default App;