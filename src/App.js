import React from 'react';
import Employee from './Employee'; // Импортируем компонент Employee

function App() {
    return (
        <div>
            <Employee lastName="Джепаров" firstName="Энвер" middleName="Исметович" salary="80000" />
            <Employee lastName="Данилюк" firstName="Дмитрий" middleName="Витальевич" salary="90000" />
            <Employee lastName="Иванов" firstName="Иван" middleName="Иванович" salary="100000" />
        </div>
    );
}

export default App;