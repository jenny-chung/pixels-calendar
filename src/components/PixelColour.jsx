import React, { useState } from 'react';

// Array of objects containing Tailwind background colours and default labels
export const palette_1 = [
    { colour: 'bg-indigo-300', activeColour: 'bg-indigo-400', label: 'alright' },
    { colour: 'bg-lime-300', activeColour: 'bg-lime-400', label: 'content' },
    { colour: 'bg-cyan-200', activeColour: 'bg-cyan-300', label: 'calm' },
    { colour: 'bg-purple-200', activeColour: 'bg-purple-300', label: 'anxious' },
    { colour: 'bg-rose-300', activeColour: 'bg-rose-400', label: 'tired' },
];

export const palette_2 = [
    { colour: 'bg-cyan-600', activeColour: 'bg-amber-500', label: 'amazing' },
    { colour: 'bg-cyan-200', activeColour: 'bg-teal-400', label: 'good' },
    { colour: 'bg-orange-200', activeColour: 'bg-purple-300', label: 'meh' },
    { colour: 'bg-rose-200', activeColour: 'bg-blue-800', label: 'bad' },
    { colour: 'bg-red-300', activeColour: 'bg-fuchsia-600', label: 'awful' },
];

export const default_palette = palette_2;

function PixelColours({ handleMoodSelection }) {

    const [chosenPalette, setChosenPalette] = useState(default_palette);
    const [editingIndex, setEditingIndex] = useState(null);
    const [newLabel, setNewLabel] = useState('');

    const handleLabelChange = (index, newLabel) => {
        const updatedPalette = [...chosenPalette];
        updatedPalette[index].label = newLabel;
        setChosenPalette(updatedPalette);
    }

    const handleLabelDoubleClick = (index, currentLabel) => {
        setEditingIndex(index);
        setNewLabel(currentLabel);
    }

    const handleBlur = () => {
        if (editingIndex !== null) {
            handleLabelChange(editingIndex, newLabel);
            setEditingIndex(null); // Reset editing index
            setNewLabel(''); // Reset new label
        }
    };

    return (
        <div className='flex flex-col items-center mx-28 mt-5 pb-10 gap-3'>
           {chosenPalette.map((item, index) => (
            <div className='flex flex-row items-center gap-4 w-full' key={index}>
                {/* Colour */}
                <button onClick={() => handleMoodSelection(index)}
                        className={`transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-black
                        ${item.colour} active:${item.activeColour} border-2 border-white px-4 py-4`}>
                </button>
                {/* Colour Label */}
                {editingIndex === index ? (
                   <input
                        type="text"
                        value={newLabel}
                        onChange={(e) => setNewLabel(e.target.value)}
                        onBlur={handleBlur}
                        autoFocus
                        className='border rounded px-2 py-1 w-32' // Set a width to keep it contained
                        style={{ minWidth: '100px' }} // Optional: Set a minimum width
                    /> 
                ) : (
                    <p
                        onDoubleClick={() => handleLabelDoubleClick(index, item.label)}
                        className='cursor-pointer'
                    >
                        {item.label}
                    </p>
                )}
            </div>))
        } 
        </div>
        
    );
}

export default PixelColours;