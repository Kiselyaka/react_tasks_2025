import React from 'react';

function User() {
    const users = {id: 1, name: 'makson', fname: 'kiselyakas'}
    return (
        <p>
            User: {users.fname} {users.name}
        </p>
    );
}

export default User;