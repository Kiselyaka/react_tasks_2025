import React, { useState } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    ]);

    const banUser = (id) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        console.log('Пользователь с ID ', id, ' забанен');
    };

    const editUser = (id, updatedUser) => {
        setUsers(prevUsers => prevUsers.map(user => 
            user.id === id ? { ...user, ...updatedUser } : user
        ));
    };

    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} onBan={banUser} onEdit={editUser} /> 
            ))}
        </div>
    );
};

export default Users;