import React from 'react';

function App() {
  function func1(arg, event) {
    console.log('Задание 1:', arg, event);
  }

  function func2(arg1, arg2, event) {
    console.log('Задание 2:', arg1, arg2, event);
  }

  function func3(event, arg) {
    console.log('Задание 3:', event, arg);
  }

  function func4(arg1, event, arg2) {
    console.log('Задание 4:', arg1, event, arg2);
  }
  
  return (
    <div>
      <h2>Задание 1:</h2>
      <button onClick={event => func1('eee', event)}>act</button>

      <h2>Задание 2:</h2>
      <button onClick={event => func2('eee', 'а дима код копирует', event)}>act</button>

      <h2>Задание 3:</h2>
      <button onClick={event => func3(event, 'eee')}>act</button>

      <h2>Задание 4:</h2>
      <button onClick={event => func4('arg1', event, 'arg2')}>act</button>
    </div>
  );
}

export default App;