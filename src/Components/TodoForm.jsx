import React, { useState } from 'react'
import TaskList from './TaskList';
import '../TaskManager.css'

function TodoForm() {
  const[task , setTask] = useState("");
  return (
    <div>
        Tasks: <input type="text" name="task" id="" value={task} placeholder='enter tasks' onChange={(e)=>setTask(e.target.value)}/>
        <TaskList TaskProps={task}  />

    </div>
  )
}

export default TodoForm