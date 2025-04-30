import React from 'react';
import { useState } from 'react'
import TaskList from './TaskList.jsx'
import TaskInput from './TaskInput.jsx';
function App2() {
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
    const nuevasTareas = tasks.map((task, i) =>
      i === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(nuevasTareas);
  };


  return (
    <div className='container'>
      <h1>LISTA DE TAREAS</h1>
      <TaskInput onAdd={agregarTarea}/>
      <TaskList
      tasks={tasks}
      onToggleComplete={onToggleComplete} 
      />
    </div>
  )
}
export default App2
