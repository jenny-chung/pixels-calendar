import React, { useState } from 'react';
import clsx from 'clsx';
import Circle from './Circle';
import Pixel from './Pixel';

const Cell = ( { content, className, title, colour, handleClick, isToday, isFuture }) => {

  colour = isFuture ? "bg-transparent" : colour;

  return (
    <>
    <div
        className={clsx(`${colour} h-14 flex items-center justify-center border-b-2 border-r-2`, {"cursor-pointer hover:bg-gray-100 active:bg-gray-200" : handleClick && !isFuture}, {"cursor-not-allowed" : isFuture}, className)}
        onClick={handleClick}
        title={title}>
        <p>{content}</p>
        {/* {isSelected ? <Pixel colour={colour} content={content}/> : <p>{content}</p>} */}
        {/* {isToday && <Circle colour="bg-orange-200" content={content}/>} */}
    </div> 
    </>
       
  )
}

export default Cell;