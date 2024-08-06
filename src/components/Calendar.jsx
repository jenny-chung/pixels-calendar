import React from 'react';
import Cell from './Cell';
import { startOfMonth, endOfMonth, subMonths, addMonths, subYears, addYears, format } from "date-fns";

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

    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    const prevMonth = () => onChange && onChange(subMonths(value, 1));
    const nextMonth = () => onChange && onChange(addMonths(value, 1));
  
    const prevYear = () => onChange && onChange(subYears(value, 1));
    const nextYear = () => onChange && onChange(addYears(value, 1));

  return (
    <div className='w-[400px] border-t-2 border-l-2 bg-white'>
        <div className='grid grid-cols-7 items-center justify-center text-center'>
            {/* Header */}
            <Cell content="<<" title="Previous Year" handleClick={prevYear}/>
            <Cell content="<" title="Previous Month" handleClick={prevMonth}/>
            <Cell content={format(value, 'LLLL yyyy')} className='col-span-3' />
            <Cell content=">" title="Next Month" handleClick={nextMonth}/>
            <Cell content=">>" title="Next Year" handleClick={nextYear}/>

            {/* Days of Week */}
            {daysOfWeek.map((day, index) => (
                <Cell className="text-xs" key={index} content={day} />
            ))}

            {/* Prefix Days */}
            {Array.from({ length: prefixDays }).map((_, index) => <Cell key={index} className='bg-slate-50' />)}

            {/* Days */}
            {Array.from({ length: numDays }).map((_, index) => {
                const date = index + 1
                return <Cell key={index} content={date} />
            })}

            {/* Suffix Days */}
            {Array.from({ length: suffixDays }).map((_, index) => <Cell key={index} className='bg-slate-50' />)}

        </div>
    </div>
  )
}

export default Calendar