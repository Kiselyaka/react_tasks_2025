import React, { useState } from 'react';

function translit(text) {
  const translitMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 
    'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 
    'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 
    'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 
    'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 
    'ю': 'yu', 'я': 'ya',
  };

  // или через цикл и кейсы => прибавлять символы к строке, но мне лень

  return text.split('').map(char => translitMap[char] || char).join('');
}

function App() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  const [value2, setValue2] = useState('');

  function handleChange2(event) {
    setValue2(event.target.value);
  }

  const sum = value2
  .split('\n')
  .map(line => parseFloat(line)) 
  .filter(num => !isNaN(num)) 
  .reduce((acc, curr) => acc + curr, 0); 

  return (
    <div>
      <div> 
      Задание 1:
      <textarea value={value} onChange={handleChange} />
      <p>{translit(value)}</p>
      </div>
      <div>
      Задание 2:
      <textarea value={value2} onChange={handleChange2} />
      <p>Сумма: {sum}</p>
      </div>
    </div>
  );
}

export default App;