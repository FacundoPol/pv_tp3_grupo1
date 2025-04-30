import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import App2 from './assets/components/App2.jsx'

createRoot(document.getElementById('principal')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
