import React, { useState } from 'react';
import User from './User';

function Users({ initUsers }) { // Добавляем пропс initUsers
  const [users, setUsers] = useState(initUsers); // Используем его для инициализации состояния

  function changeField(id, field, event) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user[field] = event.target.value;
      }
      return user;
    }));
  }

  const rows = users.map(user => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      email={user.email}
      changeField={changeField}
    />
  ));

  return (
    <div>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default Users;