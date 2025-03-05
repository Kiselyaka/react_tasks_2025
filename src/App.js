import React, { useState } from 'react';
import { nanoid } from 'nanoid'; 

const initNotes = [
  {
    id: nanoid(), 
    name: 'name1',
    desc: 'long description 1',
    show: false,
  },
  {
    id: nanoid(),
    name: 'name2',
    desc: 'long description 2',
    show: false,
  },
  {
    id: nanoid(),
    name: 'name3',
    desc: 'long description 3',
    show: false,
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);

  const toggleDescription = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, show: !note.show } : note
    ));
  };

  const result = notes.map(note => (
    <p key={note.id}>
      {note.name}, 
      {note.show && <i>{note.desc}</i>}
      <button onClick={() => toggleDescription(note.id)}>
        {note.show ? 'Скрыть описание' : 'Показать описание'}
      </button>
    </p>
  ));

  return (
    <div>
      {result}
    </div>
  );
}

export default App;