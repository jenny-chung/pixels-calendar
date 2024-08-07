import { useState } from 'react'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { format } from 'date-fns';

function App() {

  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());

  return (
    <div>
      <Navbar />
      <div className='mt-16 flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center gap-2'>
          {/* <p className='text-sm'>Selected Date: {format(currentDate, "LLLL d, yyyy")}</p> */}
          <button onClick={handleSetToday} className='bg-pink-900 text-white hover:bg-pink-800 active:bg-pink-700/50 border rounded px-4 py-2'>Today</button>
        </div>
        <Calendar value={currentDate} onChange={setCurrentDate} />
      </div>
      <Footer />
    </div>
  )
}

export default App
