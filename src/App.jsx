import { useState } from 'react'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <div>
      <Navbar />
      <div className='mt-16 flex flex-col items-center'>
        <Calendar value={currentDate} onChange={setCurrentDate} />
      </div>
      <Footer />
    </div>
  )
}

export default App
