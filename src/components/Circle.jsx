import React from 'react';
import clsx from 'clsx';

const Circle = ({ colour }) => {
  return (
    <button className={clsx("w-2 h-2 rounded-full absolute top-10 inline", colour)}></button>
  )
}

export default Circle;