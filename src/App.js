import React, { useRef, useState } from 'react';

const App = () => {
  const ref = useRef(null); 
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    ref.current.focus(); 
    setInputValue(''); 
  };

  return (
    <div>
      <input 
        ref={ref} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleClick}>Focus and Clear</button>
    </div>
  );
};

export default App;