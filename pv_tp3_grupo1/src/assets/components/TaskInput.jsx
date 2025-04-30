import { useState } from "react";
function TaskInput({onAdd}){
    const [text, setText]= useState('')

    // detecta la enrtrada del usuario
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim()){  //se encarga de que no haya entradas vacias para agregar
            onAdd(text)  //toma la entrada del usuario y la agrega a la lista
            setText('') //limpia la entrada de texto cuando se agrega una tarea para ingresar una nueva
        }               
    }

return (

    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}

        />

        <button type="submit">Agregar</button>
    </form>
        )    
}
export default TaskInput