import React from 'react';
import Cell from './Cell';
import { startOfMonth, endOfMonth } from "date-fns";

const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]  

const Calendar = ({ value, onChange }) => {

    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    console.log({startDate});
    console.log({endDate});

    const month = startDate.toLocaleString('default', { month: 'long' });
    console.log({month});

    const year = startDate.getFullYear().toString();
    console.log({year});

    const numDays = endDate.getDate();
    console.log({numDays});
  
  return (
    <div className='w-[400px] border-t-2 border-l-2'>
        <div className='grid grid-cols-7 items-center justify-center text-center'>
            {/* Header */}
            <Cell content="<<" />
            <Cell content="<" />
            <Cell content={month + " " + year} className='col-span-3' />
            <Cell content=">" />
            <Cell content=">>" />

            {/* Days of Week */}
            {daysOfWeek.map((day, index) => (
                <Cell className="text-xs" key={index} content={day} />
            ))}

            {/* Prefix Days */}
            {Array.from({ length: startDate.getDay() }).map((_, index) => <Cell key={index} />)}

            {/* Days */}
            {Array.from({ length: numDays }).map((_, index) => {
                const date = index + 1
                return <Cell key={index} content={date} />
            })}

            {/* Suffix Days */}
            {Array.from({ length: 6 - endDate.getDay() }).map((_, index) => <Cell key={index} />)}

        </div>
    </div>
  )
}

export default Calendar