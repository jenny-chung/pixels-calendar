import React, { useState } from 'react';
import { format } from 'date-fns';
import PixelColour, { palette_1 } from './PixelColour';

// Pixel modal for choosing mood of day 
const PixelModal = ({ showModal, moods, onChange, selectedDate }) => {

    const [selectedMood, setSelectedMood] = useState(null);

    const handleColourChange = (index) => {
        setSelectedMood(palette_1[index].color);
    }

    const handleSave = () => {
        if (selectedMood) {
            const updatedMoods = {
                ...moods,
                [format(selectedDate, "LLLL d, yyyy")]: selectedMood
            }
            console.log({updatedMoods});
            onChange(updatedMoods);
        }
        showModal(false);
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
            <PixelColour handleColourChange={handleColourChange} />
                
            <div className='p-6 pt-0 text-center'>
                <button className='text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-slate-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center' onClick={handleSave}>Save</button>
                <button className='ml-4 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2' onClick={() => showModal(false)}>Cancel</button>
            </div>

        </div>
    </div>
  )
}

export default PixelModal;