import React, { useState } from 'react';
import Cell from './Cell';
import { startOfMonth, endOfMonth, subMonths, addMonths, subYears, addYears, format, setDate, isToday, isFuture } from "date-fns";
import PixelModal from './PixelModal';

const Calendar = ({ value, onChange }) => {
    
    const [showModal, setShowModal] = useState(false);
    const [moods, setMoods] = useState({});

    const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]  

    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    console.log({startDate});
    console.log({endDate});

    // const month = startDate.toLocaleString('default', { month: 'long' });
    // const year = startDate.getFullYear().toString();

    const numDays = endDate.getDate();
    console.log({numDays});

    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    const prevMonth = () => onChange && onChange(subMonths(value, 1));
    const nextMonth = () => onChange && onChange(addMonths(value, 1));
  
    const prevYear = () => onChange && onChange(subYears(value, 1));
    const nextYear = () => onChange && onChange(addYears(value, 1));

    const handleOpenModal = (date) => {
        setShowModal(!isFuture(date));
    }
    
    const handleClickDate = (date) => {
        const selectedDate = setDate(value, date);
        onChange && onChange(selectedDate);
        handleOpenModal(selectedDate);
    };

  return (
    <>
    <div className='w-[400px] border-t-2 border-l-2 bg-white'>
    {showModal && <PixelModal showModal={setShowModal} selectedDate={value} moods={moods} onChange={setMoods}/>}
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
                const date = index + 1;
                const fullDate = new Date(value.getFullYear(), value.getMonth(), date);
                const formatted = format(fullDate, "LLLL d, yyyy");
                console.log({formatted})

                const isDateToday = isToday(fullDate);
                const isDateFuture = isFuture(fullDate);
                
                return <Cell key={index} content={date} backgroundColour={moods[formatted]} isToday={isDateToday} isFuture={isDateFuture} handleClick={() => handleClickDate(date)}/>
            })}

            {/* Suffix Days */}
            {Array.from({ length: suffixDays }).map((_, index) => <Cell key={index} className='bg-slate-50' />)}

        </div>
    </div>
    </>
  )
}

export default Calendar