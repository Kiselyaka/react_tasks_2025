import React, { useState } from 'react';

const initNotes = [
  { id: 1, prop1: 'Note 1', prop2: 'Details 1', prop3: 'Extra 1' },
  { id: 2, prop1: 'Note 2', prop2: 'Details 2', prop3: 'Extra 2' },
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [selectedNote, setSelectedNote] = useState({});

  // Задание 1: Функция для изменения заметки
  function doSmth(id) {
    setNotes(notes.map(note => {
      if (note.id === id) {
        note.prop1 += '!';
        note.prop2 += '!';
        note.prop3 += '!';
      }
      return note;
    }));
  }

  // Задание 1: Функция для удаления заметки
  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  // Задание 2: Функция для заполнения инпутов данными заметки
  function fillInputs(note) {
    setSelectedNote(note);
  }

  // Задание 3: Функция для сохранения изменений в заметке
  function saveChanges() {
    setNotes(notes.map(note => {
      if (note.id === selectedNote.id) {
        return selectedNote;
      }
      return note;
    }));
    setSelectedNote({});
  }

  const result = notes.map(note => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span>
        <span>{note.prop2}</span>
        <span>{note.prop3}</span>
        
        <button onClick={() => doSmth(note.id)}>Кнопочка</button>
        <button onClick={() => deleteNote(note.id)}>Удалить</button>
        <button onClick={() => fillInputs(note)}>Изменения</button>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {result}
      </ul>
      <div>
        <input
          type="text"
          value={selectedNote.prop1 || ''}
          onChange={e => setSelectedNote({ ...selectedNote, prop1: e.target.value })}
          placeholder="Prop1"
        />
        <input
          type="text"
          value={selectedNote.prop2 || ''}
          onChange={e => setSelectedNote({ ...selectedNote, prop2: e.target.value })}
          placeholder="Prop2"
        />
        <input
          type="text"
          value={selectedNote.prop3 || ''}
          onChange={e => setSelectedNote({ ...selectedNote, prop3: e.target.value })}
          placeholder="Prop3"
        />
        <button onClick={saveChanges}>Сохранить изменения</button>
      </div>
    </div>
  );
}

export default App;