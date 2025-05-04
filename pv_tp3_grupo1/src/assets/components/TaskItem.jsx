function TaskItem({ task, onToggleComplete, onDelete}) {
 return (
 <li className={`tarea ${task.completed ? 'completed' : ''}`}>
<span className="task-text">{task.text}</span>
 <button onClick={() => onToggleComplete(task.id)}>Realizada</button>
 <button onClick={() => onDelete(task.id)}>Eliminar</button>
 </li>
 );
}

export default TaskItem;