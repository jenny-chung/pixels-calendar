import { useState } from 'react'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { format } from 'date-fns';

function App() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('monthly');

  const handleSetToday = () => setCurrentDate(new Date());

  const renderYearlyView = () => {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {Array.from({ length: 12 }).map((_, index) => (
        <Calendar
          key={index}
          view={view}
          value={new Date(currentDate.getFullYear(), index, 1)}
          onChange={setCurrentDate} />
      ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col flex-grow">
      <Navbar view={view} handleView={setView} />
      <div className='flex flex-col flex-grow justify-center items-center gap-4 pt-8 pb-16'>
        {/* <p className='text-sm'>Selected Date: {format(currentDate, "LLLL d, yyyy")}</p> */}
        <button onClick={handleSetToday} className='bg-pink-900 text-white hover:bg-pink-800 active:bg-pink-700/50 border rounded px-4 py-2'>Today</button>
       
        {view === 'monthly' ? 
        (<Calendar view={view} value={currentDate} onChange={setCurrentDate} />) : (renderYearlyView())
        } 
      </div>
      <Footer />
    </div>
  )
}

export default App
