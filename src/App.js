import React from 'react';

function App() {
	const users = [
		{name: 'user1', surn: 'surn1', age: 30},
		{name: 'user2', surn: 'surn2', age: 31},
		{name: 'user3', surn: 'surn3', age: 32},
	];

	const res = users.map(function(item, index) {
		return <p key={index}>
			<li>Имя пользователя: {item.name}, фамилия пользователя: {item.surn}, возраст пользователя: {item.age}</li>
		</p>;
	});
	// совесть не мучает?)
	return <div>
		<ul>
		{res}
		</ul>
	</div>;

}

export default App;