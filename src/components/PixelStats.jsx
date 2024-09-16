import React, { useContext } from 'react';
import { MoodContext } from '../MoodContext';
import Star from '../assets/star.png';

function PixelStats() {

    const { moods, countMoods } = useContext(MoodContext);

    const moodCounts = countMoods();
    const totalCount = Object.values(moodCounts).reduce((total, count) => total + count, 0);

    return (
        <div className='my-3 mx-8'>
        <h2>Pixel Count</h2>
        <div className='flex items-center'>
                <img className='mr-1' src={Star} title='Pixel count' alt='star' width='40' height='50' />
                <p className='text-lg mr-8'>{totalCount}</p>
                {Object.entries(moodCounts).map(([mood, count]) => (
                    <span className='flex items-center' key={mood}>
                        <button
                        className={`${mood} border-2 border-white px-3 py-3 mr-1 cursor-default`}>
                        </button>
                        <span className='mr-2 text-sm'>{count}</span>
                    </span>
                ))}
            {/* <img alt='star' width='60' height='60' src={Star} /> */}
        </div>
        </div>
    );

};

export default PixelStats;