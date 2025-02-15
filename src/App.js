import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');

  function doSmth(index) {
    let copy = [...notes];
    copy[index] = copy[index] ** 2; 
    setNotes(copy);
  }

  // Удаление элемента
  function removeNote(index) {
    let copy = notes.filter((_, i) => i !== index); 
    setNotes(copy);
  }

  // Ввод текста в инпут при клике на li
  const result = notes.map((note, index) => {
    return (
      <li key={index} onClick={() => setInputValue(note)}>
        {note}
        <button onClick={(e) => { e.stopPropagation(); removeNote(index); }}>Удалить</button>
        <button onClick={() => doSmth(index)}>Квадрат</button> 
      </li>
    );
  });

  // Изменение текста в li по потере фокуса инпута
  function handleBlur() {
    const index = notes.indexOf(inputValue);
    if (index !== -1) {
      let copy = [...notes];
      copy[index] = inputValue; 
      setNotes(copy);
    }
  }

  // Перевернуть порядок li
  function reverseNotes() {
    setNotes([...notes].reverse());
  }

  return (
    <div>
      <button onClick={reverseNotes}>Перевернуть список</button>
      <ul>
        {result}
      </ul>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        onBlur={handleBlur} 
      />
    </div>
  );
}

export default App;