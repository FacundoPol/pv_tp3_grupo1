import React from "react";
import TaskItem from './TaskItem.jsx'
function TaskList({tasks,onToggleComplete})
{
return(
            <ul>
                {tasks.map((tarea) => (
                <TaskItem key={tarea.id} task={tarea} onToggleComplete={onToggleComplete}/>
                ))}
            </ul>
    )
}
export default TaskList;