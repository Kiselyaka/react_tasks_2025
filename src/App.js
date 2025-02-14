import React, { useState } from 'react';

function getSum(arr) {
  let sum = 0;  
  for (const elem of arr) {
    sum += +elem; 
  }
  return sum;
}

function getAverage(arr) {
  if (arr.length === 0) return 0; 
  return getSum(arr) / arr.length; 
}

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  function changeHandler(index, event) {
    setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
  }
  
  const result = notes.map((note, index) => {
    return (
      <input
        key={index}
        value={note}
        onChange={event => changeHandler(index, event)}
      />
    );
  });
  
  return (
    <div>
      {result}
      <h3>Среднее арифметическое: {getAverage(notes)}</h3>
      <h3>Сумма элементов: {getSum(notes)}</h3>
    </div>
  );
}

export default App;