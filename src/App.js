import React, { useState } from 'react';

function App() {

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sumResult, setSumResult] = useState(0);
  const [productResult, setProductResult] = useState(0);

  const today = new Date().toISOString().split('T')[0];
  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState(today);
  const [dateDiffResult, setDateDiffResult] = useState(0);

  const [number, setNumber] = useState('');
  const [digitSumResult, setDigitSumResult] = useState(0);

  const [divisorNumber, setDivisorNumber] = useState('');
  const [divisorProductResult, setDivisorProductResult] = useState(1);

  const handleSum = () => {
    setSumResult(Number(value1) + Number(value2));
  };

  const handleProduct = () => {
    setProductResult(Number(value1) * Number(value2));
  };

  const handleCalculateDifference = () => {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDateDiffResult(diffDays);
  };

  const handleDigitSumBlur = () => {
    const sum = Array.from(number).reduce((acc, digit) => acc + Number(digit), 0);
    setDigitSumResult(sum);
  };

  const handleDivisorProductBlur = () => {
    let product = 1;
    for (let i = 1; i <= divisorNumber; i++) {
      if (divisorNumber % i === 0) {
        product *= i;
      }
    }
    setDivisorProductResult(product);
  };

// не копируй, хорошО?

  return (
    <div>

      Задача 1: 
      <h2>Сумма и произведение чисел</h2>
      <input value={value1} onChange={event => setValue1(event.target.value)} placeholder="Введите первое число" />
      <input value={value2} onChange={event => setValue2(event.target.value)} placeholder="Введите второе число" />
      
      <button onClick={handleSum}>Сумма</button>
      <button onClick={handleProduct}>Произведение</button>
      <p>Сумма: {sumResult}</p>
      <p>Произведение: {productResult}</p>

      Задача 2-3:
      <h2>Разница между датами</h2>
      <input type="date" value={date1} onChange={event => setDate1(event.target.value)} />
      <input type="date" value={date2} onChange={event => setDate2(event.target.value)} />
      
      <button onClick={handleCalculateDifference}>Посчитать разницу</button>
      <p>Разница в днях: {dateDiffResult}</p>

      Задача 4: 
      <h2>Сумма цифр числа</h2>
      <input value={number} onChange={event => setNumber(event.target.value)} onBlur={handleDigitSumBlur} placeholder="Введите число" />
      <p>Сумма цифр: {digitSumResult}</p>

      Задача 5: 
      <h2>Произведение делителей числа</h2>
      <input value={divisorNumber} onChange={event => setDivisorNumber(event.target.value)} onBlur={handleDivisorProductBlur} placeholder="Введите число" />
      <p>Произведение делителей: {divisorProductResult}</p>
    </div>
  );
};

export default App;
