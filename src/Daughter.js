import React, { useContext } from 'react';
import { MyContext } from './MyContext';
import Grandson from './Grandson';

function Daughter() {
  const { age } = useContext(MyContext);

  return (
    <div>
      <p>Возраст в Daughter: {age}</p>
      <Grandson />
    </div>
  );
}

export default Daughter;