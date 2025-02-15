import React, { useState } from 'react';

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};

const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function App() {
  const [date, setDate] = useState(initDate);

  function handleChange(prop, event) {
    setDate({ ...date, [prop]: event.target.value });
  }

  const currentDate = new Date(date.year, date.month - 1, date.day);
  const dayOfWeekIndex = currentDate.getDay(); 
  const dayOfWeek = daysOfWeek[dayOfWeekIndex]; 

  return (
    <div>
      <input 
        type="number" 
        value={date.year} 
        onChange={event => handleChange('year', event)} 
        placeholder="Год" 
      />
      <input 
        type="number" 
        value={date.month} 
        onChange={event => handleChange('month', event)} 
        placeholder="Месяц" 
      />
      <input 
        type="number" 
        value={date.day} 
        onChange={event => handleChange('day', event)} 
        placeholder="День" 
      />

      <br />
      <p>
        {date.year}-{date.month}-{date.day} ({dayOfWeek})
      </p>
    </div>
  );
}

export default App;