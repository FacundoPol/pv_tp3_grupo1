import React from 'react';
import { useState } from 'react'
import TaskList from './assets/components/TaskList.jsx'
import TaskInput from './assets/components/TaskInput.jsx';
import './App.css'
import Formu from './assets/components/Arrays.jsx';
function App() {
  const [tasks, setTasks] = useState([]); // lista de tareas

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: crypto.randomUUID(), // genera un ID único
      text: texto,
      completed: false
    };
    setTasks([...tasks, nuevaTarea]);
  };

  const onToggleComplete = (id) => {
    const nuevasTareas = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(nuevasTareas);
  };

  const eliminarTarea = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
 

  return (
    <div className='container'>
      <div className='tareas'>
        <h1>LISTA DE TAREAS</h1>
        <TaskInput onAdd={agregarTarea}/>
        <TaskList tasks={tasks} onToggleComplete={onToggleComplete} onDelete={eliminarTarea} />
      </div>
      <div className='productos'>
       
      <Formu /> 
      </div>
    </div>
  )
}
export default App
