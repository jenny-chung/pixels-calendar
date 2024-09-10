import React from 'react';
import clsx from 'clsx';

export const palette_1 = [
    { color: 'bg-indigo-300', activeColour: 'bg-indigo-400', label: 'meh' },
    { color: 'bg-lime-300', activeColour: 'bg-lime-400', label: 'content' },
    { color: 'bg-cyan-200', activeColour: 'bg-cyan-300', label: 'calm' },
    { color: 'bg-purple-200', activeColour: 'bg-purple-300', label: 'anxious' },
    { color: 'bg-rose-300', activeColour: 'bg-rose-400', label: 'tired' },
];

function PixelColour({ handleColourChange }) {

    const chosenPalette = palette_1;

    return (
        <div className='flex flex-col flex-wrap mx-28 mt-5 pb-10 gap-3'>
           {chosenPalette.map((item, index) => (
            <div className='flex flex-row gap-4' key={index}>
                <button onClick={() => handleColourChange(index)}
                        className={`transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-110 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-black
                        ${item.color} active:${item.activeColour} border-2 border-black px-3 py-3`}>
                </button>
                <p>{item.label}</p>
            </div>))
        } 
        </div>
        
    );
}

export default PixelColour;