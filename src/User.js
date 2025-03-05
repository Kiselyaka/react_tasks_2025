import React from 'react';

const User = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>ID: {user.id}</p> 
            <p>Email: {user.email}</p>
        </div>
    );
};

export default User;
