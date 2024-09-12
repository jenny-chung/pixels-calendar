import React from 'react';
import Orange from '../assets/orange.png';

const getButtonClass = (currentView, view) => {
  return `ml-2 px-3 py-2 text-white border rounded hover:bg-rose-400 ${currentView === view ? 'bg-pink-700' : 'bg-rose-300'}`;
}

const Navbar = ({ view, handleView }) => {

  return (
    <div className='my-3 mx-6 flex flex-row items-center justify-between'>
    <div className='flex items-center'>
      <img src={Orange} width="50" height="50" alt="logo" />
      <div className='ml-2 text-xl font-thin'>pixels</div>
    </div>
   
    <div>
      <button onClick={() => handleView('monthly')} className={getButtonClass(view, 'monthly')}>Month</button>
      <button onClick={() => handleView('yearly')} className={getButtonClass(view, 'yearly')}>Year</button>
    </div>
    
    </div>
  )
}

export default Navbar;