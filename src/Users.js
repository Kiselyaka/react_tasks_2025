import React from 'react';
import User from './User';

const Users = () => {
    const users = [
        { id: 1, name: 'Bim Bim', email: 'BimBim@example.com' },
        { id: 2, name: 'Bam Bam', email: 'BamBam@example.com' },
        { id: 3, name: 'Bom Bom', email: 'BomBom@example.com' },
    ];

    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};

export default Users;