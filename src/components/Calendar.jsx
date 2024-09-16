import React, { useState, useContext } from 'react';
import Cell from './Cell';
import { startOfMonth, endOfMonth, subMonths, addMonths, subYears, addYears, format, setDate, isToday, isFuture } from "date-fns";
import PixelModal from './PixelModal';
import { MoodContext } from '../MoodContext';

const Calendar = ({ view, value, onChange }) => {
    
    const [showModal, setShowModal] = useState(false);
    const [date, setCalendarDate] = useState(null);

    const { moods, saveMood } = useContext(MoodContext);

    const daysOfWeek = view === 'monthly' ? ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"] : ["S", "M", "T", "W", "T", "F", "S"];

    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    console.log("start: ", startDate);
    console.log("end: ", endDate);

    // const month = startDate.toLocaleString('default', { month: 'long' });
    // const year = startDate.getFullYear().toString();

    const numDays = endDate.getDate();
    // console.log({numDays});
    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    const prevMonth = () => onChange && onChange(subMonths(value, 1));
    const nextMonth = () => onChange && onChange(addMonths(value, 1));
  
    const prevYear = () => onChange && onChange(subYears(value, 1));
    const nextYear = () => onChange && onChange(addYears(value, 1));
    
    const handleClickDate = (day) => {
        const selectedDate = setDate(value, day);
        // console.log({selectedDate});
        
        setCalendarDate(selectedDate);
        onChange && onChange(selectedDate);
        if (!isFuture(selectedDate)) {
            // Open pixel modal to choose mood for day if date is not in the future
            setShowModal(true);
        }
    };

    return (
        <>
        <div className='w-[400px] border-t-2 border-l-2 bg-white'>
        {showModal && <PixelModal showModal={setShowModal} selectedDate={date} onChange={saveMood}/>}
            <div className='grid grid-cols-7 items-center justify-center text-center'>
                
                {/* Header */}
                {view === 'monthly' ? (
                <>
                <Cell content="<<" title="Previous Year" handleClick={prevYear}/>
                <Cell content="<" title="Previous Month" handleClick={prevMonth}/>
                <Cell content={format(value, 'LLLL yyyy')} className='col-span-3' />
                <Cell content=">" title="Next Month" handleClick={nextMonth}/>
                <Cell content=">>" title="Next Year" handleClick={nextYear}/>
                </>) : 
                (<>
                <Cell content="" />
                <Cell content="" />
                <Cell content={format(value, 'LLLL yyyy')} className='col-span-3' />
                <Cell content="" />
                <Cell content="" />
                </>
                )}

                {/* Days of Week */}
                {daysOfWeek.map((day, index) => (
                    <Cell className="text-xs" key={index} content={day} />
                ))}

                {/* Prefix Days */}
                {Array.from({ length: prefixDays }).map((_, index) => <Cell key={index} className='bg-slate-100' />)}

                {/* Days */}
                {Array.from({ length: numDays }).map((_, index) => {
                    const date = index + 1;
                    const fullDate = new Date(value.getFullYear(), value.getMonth(), date);
                    const formattedDate = format(fullDate, "LLLL d, yyyy");
                    // console.log({formatted: formattedDate})

                    const isDateToday = isToday(fullDate);
                    const isDateFuture = isFuture(fullDate);
                    
                    return <Cell key={index} content={date} backgroundColour={moods[formattedDate]?.mood} isToday={!(formattedDate in moods) && isDateToday} isFuture={isDateFuture} handleClick={() => handleClickDate(date)}/>
                })}

                {/* Suffix Days */}
                {Array.from({ length: suffixDays }).map((_, index) => <Cell key={index} className='bg-slate-100' />)}

            </div>
        </div>
        </>
    )
}

export default Calendar;