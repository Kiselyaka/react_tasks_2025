import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function Grandson() {
  const age = useContext(MyContext);

  return (
    <div>
      <p>Age in Grandson: {age / 2}</p>
    </div>
  );
}

export default Grandson;