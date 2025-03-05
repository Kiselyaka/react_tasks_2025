import React from 'react';

function Employee({ lastName, firstName, middleName, salary }) {
    return (
        <div>
            <p>
                Фамилия: <span>{lastName}</span>,
                Имя: <span>{firstName}</span>,
                Отчество: <span>{middleName}</span>,
                Зарплата: <span>{salary} руб.</span>
            </p>
        </div>
    );
}

export default Employee;