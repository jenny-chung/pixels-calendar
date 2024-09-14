import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MoodProvider } from './MoodContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoodProvider>
      <App />
    </MoodProvider>
  </React.StrictMode>,
)
