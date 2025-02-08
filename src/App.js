import React from 'react';
import { nanoid } from 'nanoid'; 
import { useState } from 'react';

// import { v4 as uuidv4 } from 'react-uuid'; // Для второго варианта

function App() {
    const [age, setAge] = useState(0);
    const currentYear = new Date().getFullYear();
    
    function handleChange(event) {
        setAge(event.target.value);
    }
    
	const [fahrenheit, setFahrenheit] = useState(0);

    function handleChange2(event) {
        setFahrenheit(event.target.value);
    }

    const birthYear = currentYear - age;
	const celsius = (fahrenheit - 32) * 5/9;

    return (
		<>
        <div>
            <input type="number" value={age} onChange={handleChange} placeholder="Введите ваш возраст"/>
            <p>Ваш год рождения: {birthYear}</p>
        </div>
		<div>
		<input 
			type="number" value={fahrenheit} onChange={handleChange2} placeholder="Введите градусы Фаренгейта"/>
		<p>Градусы Цельсия: {celsius.toFixed(2)}</p>
	    </div>
		</>
    );
}

export default App;