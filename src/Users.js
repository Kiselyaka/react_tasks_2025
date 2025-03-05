import React, { useState } from 'react';
import User from './User'; 

const initUsers = [
    { id: 1, name: 'user1', surname: 'surn1', age: 30 },
    { id: 2, name: 'user2', surname: 'surn2', age: 31 },
    { id: 3, name: 'user3', surname: 'surn3', age: 32 },
];

function Users() {
    const [users, setUsers] = useState(initUsers);
    
    const userItems = users.map(user => (
        <User 
            key={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
        />
    ));
    
    return (
        <div>
            {userItems}
        </div>
    );
}

export default Users;