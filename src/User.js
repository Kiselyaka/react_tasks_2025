import React, { useState } from 'react';

const User = ({ user, onBan, onEdit, UserField }) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleEdit = (id, fieldType, value) => {
        onEdit(id, { [fieldType]: value });
    };

    return (
        <div>
            <div>
                Name: <UserField
                    id={user.id}
                    text={user.name}
                    type="name"
                    isEdit={isEditing}
                    editUser={handleEdit}
                />
            </div>
            <div>
                Email: <UserField
                    id={user.id}
                    text={user.email}
                    type="email"
                    isEdit={isEditing}
                    editUser={handleEdit}
                />
            </div>
            <button onClick={() => onBan(user.id)}>Забанить пользователя</button>
            <button onClick={toggleEditMode}>
                {isEditing ? 'Сохранить' : 'Редактировать'}
            </button>
        </div>
    );
};

export default User;