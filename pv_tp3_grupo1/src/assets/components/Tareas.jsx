import React from 'react';
import { useState } from 'react'
import TaskList from './TaskList.jsx'
import TaskInput from './TaskInput.jsx';
function Tareas() {
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
    </div>
    )
}
export default Tareas