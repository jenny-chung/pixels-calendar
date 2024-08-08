import React from 'react';
import clsx from 'clsx';
import Circle from './Circle';

const Cell = ( { content, className, title, backgroundColour, handleClick, isToday, isFuture }) => {

  return (
    <div
        className={
          clsx(`${backgroundColour} h-14 flex relative items-center justify-center border-b-2 border-r-2`, 
          {"cursor-pointer hover:bg-gray-100 active:bg-gray-200" : handleClick && !isFuture},
          {"cursor-not-allowed" : isFuture},
          className
        )}
        onClick={handleClick}
        title={title}>
        <p className="z-10">{content}</p>
        {/* {isSelected ? <Pixel colour={colour} content={content}/> : <p>{content}</p>} */}
        {isToday && <Circle colour="bg-orange-300" />}
    </div>    
  )
}

export default Cell;

