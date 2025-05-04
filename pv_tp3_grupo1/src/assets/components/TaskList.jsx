import React from "react";
import TaskItem from './TaskItem.jsx'
function TaskList({tasks,onToggleComplete, onDelete})
{
return(
            <ul>
                {tasks.map((tarea) => (
                <TaskItem key={tarea.id} task={tarea} onToggleComplete={onToggleComplete} onDelete={onDelete}/>
                ))}
            </ul>
    )
}
export default TaskList;