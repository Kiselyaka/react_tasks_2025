import React from 'react';
import Users from './Users';

const App = () => {
  const initUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  ];

  return (
    <div>
      <h1>Список пользователей</h1>
      <Users initUsers={initUsers} /> 
    </div>
  );
};

export default App;