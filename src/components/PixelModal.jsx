import React, { useState } from 'react';
import { format } from 'date-fns';
import PixelColours, { default_palette } from './PixelColour';

// Pixel modal for choosing mood for specific day 
const PixelModal = ({ showModal, moods, onChange, selectedDate }) => {

    const [selectedMood, setSelectedMood] = useState(null);

    const handleMoodSelection = (index) => {
        setSelectedMood(default_palette[index].colour);
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
        closeModal();
    }

    const closeModal = () => {
        showModal(false);
    }

  return (
    <div className='fixed z-50 inset-0 bg-slate-600/65 border overflow-y-auto h-full w-full px-4'>
        <div className='relative top-40 mx-auto shadow-xl rounded-md bg-orange-50 max-w-xs'>

            {/* Close Popup Button */}
            <div className='flex justify-end p-2'>
                <button className='bg-white hover:bg-slate-200 px-3 py-1 rounded' onClick={closeModal}>X</button>
            </div>

            <div className='p-2 text-center text-xl'> 
                <p>Choose a pixel colour</p>
                <p className='text-sm'>Selected Date: {format(selectedDate, "LLLL d, yyyy")}</p>
            </div>

            <PixelColours handleMoodSelection={handleMoodSelection} />
                
            <div className='p-6 pt-0 text-center'>
                <button className='text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center' onClick={handleSave}>Save</button>
                <button className='ml-3 mr-2 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center' onClick={closeModal}>Cancel</button>
            </div>

        </div>
    </div>
  )
}

export default PixelModal;