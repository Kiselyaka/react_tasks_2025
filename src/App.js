import React from 'react';
import { nanoid } from 'nanoid'; 
// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта
	
function id() {
  return nanoid(); 
}

function App() 
{
	const prods = [
		{id: id(), name: 'product1', cost: 100},
		{id: id(), name: 'product2', cost: 200},
		{id: id(), name: 'product3', cost: 300},
	];
	
	const res = prods.map(function(item) {
			return <p key={item.id}>{item.name} {item.cost}</p>;
	});	

  return (
    <div>
      {res}
    </div>
  );
}

export default App;