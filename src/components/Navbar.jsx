import React from 'react';

const Navbar = () => {
  return (
    <div className='my-3 mx-6 flex flex-row items-center'>
      <img src="src/assets/orange.png" width="50" height="50" alt="logo" />
      <div className='ml-2 text-xl font-thin'>pixels</div> 
    </div>
  )
}

export default Navbar;