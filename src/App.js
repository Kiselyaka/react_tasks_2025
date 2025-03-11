import React, { useState, useMemo } from 'react';

const App = () => {
  const [text, setText] = useState('react');
  const [num, setNum] = useState(0);

  const triple = (num) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
    }
    
    return num * 3;
  };
  const result = useMemo(() => triple(num), [num]);

  return (
    <div>
      <p onClick={() => setText(text + '!')}>{text}</p>
      <p onClick={() => setNum(num + 1)}>Triple: {result}</p>
    </div>
  );
};

export default App;