import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Accordian from './components/accordian/index.jsx'
import RandomColor from './components/random-color/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Accordian/> */}
    <RandomColor/>
  </StrictMode>,
)
