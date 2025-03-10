import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';

function App() {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });
  
  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]); 
  const changeUsername = (event) => {
    setUsername(event.target.value); 
  };

  return (
    <div>
      <h1>React App</h1>
      <input 
        type="text" 
        value={username} 
        onChange={changeUsername} 
        placeholder="Введите имя пользователя" 
      />
      <p>Текущее имя пользователя: {username}</p>
    </div>
  );
}

export default App;