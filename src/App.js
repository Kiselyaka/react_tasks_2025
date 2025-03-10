import React, { useState } from 'react';
import Calculator from './Calculator';
import TemperatureConverter from './TemperatureConverter';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  const startEdit = (index) => {
    setEditNum(index); 
  };

  const changeItem = (event) => {
    const newNotes = [...notes];
    newNotes[editNum] = event.target.value;
    setNotes(newNotes);
  };

  const result = notes.map((note, index) => (
    <p key={index} onClick={() => startEdit(index)}>
      {note}
    </p>
  ));

  return (
    <div>
      {result}
      {editNum !== null && ( 
        <input value={notes[editNum]} onChange={changeItem} />
      )}
    </div>
  );
}

export default App;