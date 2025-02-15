import React, { useState } from 'react';

const initNotes = [
  {
    id: 'GYi9G_uC4gBF1e2SixDvu',
    prop1: 'value11',
    prop2: 'value12',
    prop3: 'value13',
  },
  {
    id: 'IWSpfBPSV3SXgRF87uO74',
    prop1: 'value21',
    prop2: 'value22',
    prop3: 'value23',
  },
  {
    id: 'JAmjRlfQT8rLTm5tG2m1L',
    prop1: 'value31',
    prop2: 'value32',
    prop3: 'value33',
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [newProp1, setNewProp1] = useState('');
  const [newProp2, setNewProp2] = useState('');
  const [newProp3, setNewProp3] = useState('');

  const addNote = () => {
    const newNote = {
      id: Date.now().toString(), 
      prop1: newProp1,
      prop2: newProp2,
      prop3: newProp3,
    };
    
    setNotes([...notes, newNote]); 
    setNewProp1('');
    setNewProp2('');
    setNewProp3('');
  };

  const result = notes.map(note => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span>
        <span>{note.prop2}</span>
        <span>{note.prop3}</span>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {result}
      </ul>
      <input 
        type="text" 
        value={newProp1} 
        onChange={(e) => setNewProp1(e.target.value)} 
        placeholder="Введите prop1" 
      />
      <input 
        type="text" 
        value={newProp2} 
        onChange={(e) => setNewProp2(e.target.value)} 
        placeholder="Введите prop2" 
      />
      <input 
        type="text" 
        value={newProp3} 
        onChange={(e) => setNewProp3(e.target.value)} 
        placeholder="Введите prop3" 
      />
      <button onClick={addNote}>Добавить элемент</button>
    </div>
  );
}

export default App;