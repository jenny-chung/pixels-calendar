import { useState } from 'react'
import Calendar from './components/Calendar'

function App() {

  const [currentDate, setCurrentDate] = useState(new Date('2024-06-09'))

  return (
   <div className='mt-16 flex flex-col items-center'>
    <Calendar value={currentDate} onChange={setCurrentDate} />
  </div>
  )
}

export default App
