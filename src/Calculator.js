import React, { useState } from 'react';

function getSum(arr) {
  return arr.reduce((acc, elem) => acc + Number(elem), 0);
}

function Calculator() {
  const [value, setValue] = useState('');
  const [nums, setNums] = useState([1, 2, 3]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleBlur(event) {
    if (event.target.value) {
      setNums([...nums, event.target.value]);
      setValue(''); 
    }
  }

  const sum = getSum(nums); 

  return (
    <div>
      <p>Сумма: {sum}</p>
      <input value={value} onChange={handleChange} onBlur={handleBlur} />
    </div>
  );
}

export default Calculator;