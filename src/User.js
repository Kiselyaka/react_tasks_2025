import React from 'react';

const User = ({ user, onBan }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => onBan(user.id)}>Забанить пользователя</button> 
        </div>
    );
};

export default User;