import React from 'react';
import clsx from 'clsx';

const Cell = ( { content, className }) => {
  return (
    <div className={clsx("h-10 flex items-center justify-center border-b-2 border-r-2", className)}>{content}</div>
  )
}

export default Cell;