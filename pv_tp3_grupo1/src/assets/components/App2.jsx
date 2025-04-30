import { useState } from 'react'
import Listar from './assets/components/TaskList.jsx'
import TaskInput from './assets/components/TaskInput.jsx';
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
      <Listar
      tasks={tasks}
      onToggleComplete={onToggleComplete} 
      />
    </div>
  )
}
export default App2
