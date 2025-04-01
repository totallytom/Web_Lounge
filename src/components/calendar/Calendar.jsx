import React, { useState, useEffect } from 'react';
import './calendar.css';

function DateComponent() {
  const [date, setDate] = useState(new Date());
  const [monthName, setMonthName] = useState('');
  const [dayName, setDayName] = useState('');
  const [dayNum, setDayNum] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('black');

  useEffect(() => {
    const updateDate = () => {
      const newDate = new Date();
      setMonthName(newDate.toLocaleString("en", { month: "long" }));
      setDayName(newDate.toLocaleString("en", { weekday: "long" }));
      setDayNum(newDate.getDate());
      setYear(newDate.getFullYear());
    };
    updateDate();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setMonthName(newDate.toLocaleString("en", { month: "long" }));
      setDayName(newDate.toLocaleString("en", { weekday: "long" }));
      setDayNum(newDate.getDate());
      setYear(newDate.getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around'}} >
      <h1 id="month-name">{monthName}</h1>
      <h2 id="day-number">{dayNum}</h2>
      <h2 id="year">{year}</h2>
    </div>
  );
}

export default DateComponent;