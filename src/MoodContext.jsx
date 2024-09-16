import React, { createContext, useState, useEffect } from "react";
import { format } from 'date-fns';
import { generateClient } from 'aws-amplify/api';
import { createMoodEntry, updateMoodEntry } from './graphql/mutations';
import { listMoodEntries } from './graphql/queries';

const client = generateClient();

// Storage for moods data
export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
    const [moods, setMoods] = useState({});

    // const updateMoods = (moodsMap) => {
        // const updatedMoods = {
        //     ...moods, 
        //     [format(date, 'LLLL d, yyyy')]: mood
        // }
    //     setMoods(moodsMap);
    // };

    // Function to fetch moods
    const fetchMoods = async () => {
        try {
            const result = await client.graphql({ query: listMoodEntries });
            console.log({result});
            const moodEntries = result.data.listMoodEntries.items;
            const moodMap = {};
            moodEntries.forEach(entry => {
                moodMap[entry.date] = { id: entry.id, mood: entry.mood } ; // Map dates to moods
            });
            setMoods(moodMap); // Update context with the fetched moods
        } catch (error) {
            console.error("Error fetching moods:", error);
        }
    };

    // Function to save mood entry
    const saveMood = async (date, mood) => {
        const formattedDate = format(date, "LLLL d, yyyy");
        const moodEntry = {
            date: formattedDate,
            mood: mood,
        };
        console.log({moodEntry});

        try {
            if (moods[formattedDate]) {
                // Update mutation 
                await client.graphql({
                    query: updateMoodEntry,
                    variables: { 
                        input: { id: moods[formattedDate].id, mood }
                    }
                });
            } else {
                await client.graphql({
                    query: createMoodEntry,
                    variables: {
                        input: moodEntry
                    }
                });
            }
            fetchMoods(); // Refresh moods after saving
        } catch (error) {
            console.error("Error saving mood:", error);
        }
    };

    const countMoods = () => {
        const moodCounts = {};
        for (const m of Object.values(moods)) {
            moodCounts[m.mood] = (moodCounts[m.mood] || 0) + 1;
        }
        return moodCounts;
    };

     // Log moods whenever they change
     useEffect(() => {
        fetchMoods();
    }, []);

    // Log updated moods
    useEffect(() => {
        console.log({ moods });
        const moodCounts = countMoods();
        console.log({ moodCounts });
    }, [moods]); // This will run every time moods change

    return (
        <MoodContext.Provider value={{ moods, saveMood, countMoods }}>
            {children}
        </MoodContext.Provider>
    );
};