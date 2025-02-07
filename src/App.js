import React from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; // Импортируем v4 из uuid

function App() 
{
  const randomIdsNanoid = Array.from({ length: 5 }, () => nanoid());
  const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());

  return (
    <div>
      <h2>Случайные строки с помощью nanoid:</h2>
      <ul>
        {randomIdsNanoid.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>

      <h2>Случайные UUID с помощью uuid:</h2>
      <ul>
        {randomIdsUUID.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}


// 1. Импорт библиотек:
//    • Импортируем nanoid из библиотеки nanoid.
//    • Импортируем v4 из библиотеки react-uuid и переименовываем его в uuidv4.
// 2. Генерация случайных строк:
//    • Создаем массив randomIdsNanoid, который содержит 5 случайных строк, сгенерированных с помощью nanoid().
//    • Создаем массив randomIdsUUID, который содержит 5 UUID, сгенерированных с помощью uuidv4().
// 3. Отображение результатов:
//    • Используем метод map для отображения каждого сгенерированного идентификатора в списке <ul>.
//    • Указываем атрибут key для каждого элемента списка, чтобы обеспечить уникальность.


export default App;