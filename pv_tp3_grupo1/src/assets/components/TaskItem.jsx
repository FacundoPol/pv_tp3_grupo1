function TaskItem({ task, onToggleComplete, }) {
 return (
 <li className={`tarea ${task.completed ? 'completed' : ''}`}>
<span>{task.text}</span>
 <button onClick={() => onToggleComplete(task.id)}>Realizada</button>
 <button onClick={() => onDelete(task.id)}>Eliminar</button>
 </li>
 );
}

export default TaskItem;