import React from 'react';
import { MyContext } from './MyContext';
import Daughter from './Daughter';

function Parent() {
  return (
    <MyContext.Provider value={42}>
      <Daughter />
    </MyContext.Provider>
  );
}

export default Parent;