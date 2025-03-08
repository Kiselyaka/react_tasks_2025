import React, { useState } from 'react';

const User = ({ user, onBan, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedEmail, setEditedEmail] = useState(user.email);

    const handleEdit = () => {
        onEdit(user.id, { name: editedName, email: editedEmail });
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
                        value={editedName} 
                        onChange={(e) => setEditedName(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        value={editedEmail} 
                        onChange={(e) => setEditedEmail(e.target.value)} 
                    />
                    <button onClick={handleEdit}>Сохранить</button>
                    <button onClick={() => setIsEditing(false)}>Отмена</button>
                </div>
            ) : (
                <div>
                    <h2>{user.name}</h2>
                    <p>ID: {user.id}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => onBan(user.id)}>Забанить пользователя</button>
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                </div>
            )}
        </div>
    );
};

export default User;