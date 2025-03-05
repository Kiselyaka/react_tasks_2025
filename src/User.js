import React from 'react';

function User({ name, surname, age }) {
    return (
        <div>
            Имя: <span>{name}</span>,
            Фамилия: <span>{surname}</span>,
            Возраст: <span>{age}</span>
        </div>
    );
}

export default User;