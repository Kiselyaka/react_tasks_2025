import React, { useState } from 'react';
import Text from './Text'; 

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <Text />
    </div>
  );
};

export default App;