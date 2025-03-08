import React from 'react';
import User from './User';

const Users = ({ users, onBan, onEdit, UserField }) => {
    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} onBan={onBan} onEdit={onEdit} UserField={UserField} />
            ))}
        </div>
    );
};

export default Users;