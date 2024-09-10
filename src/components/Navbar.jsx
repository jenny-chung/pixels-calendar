import React from 'react';
import clsx from 'clsx';

const Navbar = ({ view, handleView }) => {
  return (
    <div className='my-3 mx-6 flex flex-row items-center justify-between'>
    <div className='flex items-center'>
      <img src="src/assets/orange.png" width="50" height="50" alt="logo" />
      <div className='ml-2 text-xl font-thin'>pixels</div>
    </div>
    
    <div>
      <button onClick={() => handleView('monthly')} className='ml-auto bg-orange-300 text-white px-3 py-2 border rounded hover:bg-orange-400'>Month</button>
      <button onClick={() => handleView('yearly')} className='ml-2 bg-orange-300 text-white px-3 py-2 border rounded hover:bg-orange-400'>Year</button>
    </div>
    
    </div>
  )
}

export default Navbar;