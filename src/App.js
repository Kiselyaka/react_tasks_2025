import React from 'react';
import User from './User'; // Импортируем компонент User

const users = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
];

function App() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                    </tr>
                </thead>
                <tbody>
                    <User name={users[0].name} surn={users[0].surn} age={users[0].age} />
                    <User name={users[1].name} surn={users[1].surn} age={users[1].age} />
                    <User name={users[2].name} surn={users[2].surn} age={users[2].age} />
                </tbody>
            </table>
        </div>
    );
}

export default App;