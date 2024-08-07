import React from 'react';
import clsx from 'clsx';

const Cell = ( { content, className, title, backgroundColour, handleClick, isToday, isFuture }) => {

  // colour = isFuture ? "bg-transparent" : colour;

  return (
    <div
        className={clsx(`${backgroundColour} h-14 flex items-center justify-center border-b-2 border-r-2`, {"cursor-pointer hover:bg-gray-100 active:bg-gray-200" : handleClick && !isFuture}, {"cursor-not-allowed" : isFuture}, className)}
        onClick={handleClick}
        title={title}>
        <p>{content}</p>
        {/* {isSelected ? <Pixel colour={colour} content={content}/> : <p>{content}</p>} */}
        {/* {isToday && <Circle colour="bg-orange-200" content={content}/>} */}
    </div>    
  )
}

export default Cell;