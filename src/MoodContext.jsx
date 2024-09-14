import React, { createContext, useState } from "react";
import { format } from 'date-fns';

// Storage for moods data
export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
    const [moods, setMoods] = useState({});

    const updateMoods = (date, mood) => {
        const updatedMoods = {
            ...moods, 
            [format(date, 'LLLL d, yyyy')]: mood
        }
        console.log({updateMoods});
        setMoods(updatedMoods);
    };

    return (
        <MoodContext.Provider value={{ moods, updateMoods }}>
            {children}
        </MoodContext.Provider>
    );
};