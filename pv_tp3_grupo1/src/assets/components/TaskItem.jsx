function TaskItem({ task, onToggleComplete, }) {
 return (
 <li className={`tarea ${task.completed ? 'completed' : ''}`}>
<span>{task.text}</span>
 <button onClick={() => onToggleComplete(task.id)}>Realizada</button>
 </li>
 );
}

export default TaskItem;