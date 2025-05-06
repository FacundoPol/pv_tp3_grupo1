import React from 'react';
import Tareas from './assets/components/Tareas.jsx';
import './App.css'
import Formu from './assets/components/Productos.jsx';
function App() {
  return (
    <div className='container'>
      <div className='tareas'>
        <Tareas/>
      </div>
      <div className='productos'>
      <Formu /> 
      </div>
    </div>
  )
}
export default App
