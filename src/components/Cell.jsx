import React from 'react';
import clsx from 'clsx';
import Circle from './Circle';

const Cell = ( { content, className, title, handleClick, isSelected }) => {
  return (
    <>
    <div
        className={clsx("h-14 flex items-center justify-center border-b-2 border-r-2", {"cursor-pointer hover:bg-red-100 active:bg-red-200" : handleClick}, className)}
        onClick={handleClick} title={title}>
        {isSelected ? <Circle colour="bg-orange-300" content={content}/> : <p>{content}</p>}
    </div>  
    </>
       
  )
}

export default Cell;