import React from 'react';
import { nanoid } from 'nanoid'; 
import { useState } from 'react';

// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function App() 
{
	const [name_user, setName1] = useState('Maxim');
	const [name_last, setName2] = useState('Kiseliov');
	const changeName = () => {
		setName1('Новое имя'); // Вы можете изменить на нужное вам значение
	  };
  return (
    <div>
      Имя пользователя: {name_user} {name_last}<br />
	  <button onClick={changeName}>Изменить имя</button>
	  <button onClick={() => setName2('xxxx')}>Изменить фамилию</button>
    </div>
  );
}

export default App;