import React, { useState } from 'react';
import { format } from 'date-fns';

// Pixel modal for choosing mood of day 
const PixelModal = ({ showModal, moods, onChange, selectedDate }) => {

    // Object mapping color prop to Tailwind CSS background color classes  
    const palette = ['bg-indigo-300', 'bg-lime-300', 'bg-cyan-200', 'bg-purple-200', 'bg-rose-300'];

    const handleColourChange = (index) => {
        const updatedMoods = {
            ...moods,
            [format(selectedDate, "LLLL d, yyyy")]: palette[index]
        }
        console.log(updatedMoods);
        onChange(updatedMoods);
    }

  return (
    <div className='fixed z-50 inset-0 bg-slate-600/65 border overflow-y-auto h-full w-full px-4'>
        <div className='relative top-40 mx-auto shadow-xl rounded-md bg-orange-50 max-w-xs'>

            {/* Close Popup Button */}
            <div className='flex justify-end p-2'>
                <button className='bg-white hover:bg-slate-200 px-3 py-1 border rounded' onClick={() => showModal(false)}>X</button>
            </div>

            <div className='p-2 text-center text-xl'> 
                <p>Choose a pixel colour</p>
                <p className='text-sm'>Selected Date: {format(selectedDate, "LLLL d, yyyy")}</p>
            </div>

            {/* Pixel Colours */}
              <div className='flex flex-col flex-wrap mx-28 mt-5 pb-10 gap-3'>
                <div className='flex flex-row gap-4'>
                    <button onClick={() => handleColourChange(0)} className='bg-indigo-300 active:bg-indigo-400 border-2 border-black px-3 py-3'></button>
                    <p>meh</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <button onClick={() => handleColourChange(1)} className='bg-lime-300 active:bg-lime-400 border-2 border-black px-3 py-3'></button>
                    <p>content</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <button onClick={() => handleColourChange(2)} className='bg-cyan-200 active:bg-cyan-300 border-2 border-black px-3 py-3'></button>
                    <p>calm</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <button onClick={() => handleColourChange(3)} className='bg-purple-200 active:bg-purple-300 border-2 border-black px-3 py-3'></button>
                    <p>anxious</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <button onClick={() => handleColourChange(4)} className='bg-rose-300 active:bg-rose-400 border-2 border-black px-3 py-3'></button>
                    <p>tired</p>
                </div>
                </div>  
            
            <div className='p-6 pt-0 text-center'>
                <button className='text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-slate-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center' onClick={() => showModal(false)}>Save</button>
                <button className='ml-4 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2' onClick={() => showModal(false)}>Cancel</button>
            </div>

        </div>
    </div>
  )
}

export default PixelModal;