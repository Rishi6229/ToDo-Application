import React, { useState } from 'react'
import '../TaskManager.css'


function TaskList(props) {
    const [index, setIndex] = useState(0);
    const [taskArray, setTaskArray] = useState([]);

    const[isEditing , setIsEditing] = useState(null);
    const[editedTask , setEditedTask] = useState("");

    return (
        <div>
            <button onClick={() => {
                if (props.TaskProps.trim() !== "") {
                    setTaskArray([
                        ...taskArray,
                        {
                            id: index,
                            name: props.TaskProps
                        }
                    ]);
                    setIndex(index + 1);
                    props.onTaskAdded();
                }
            }}>Add Task</button>

            <ul>
                {taskArray.map(tasks => (
                    <li key={tasks.id}>
                        {isEditing === tasks.id?(
                            <input type="text"
                              value={editedTask}
                              onChange={(e)=>setEditedTask(e.target.value)}
                            />
                        ):(
                            <span>{tasks.name}</span>
                        )}
                        <button onClick={()=>{
                            if(isEditing === tasks.id){
                                if(editedTask.trim() !== ""){
                                    setTaskArray(taskArray.map(t=> t.id===tasks.id?{...t,name:editedTask}:t));
                                }
                                setIsEditing(null);
                            }else{
                                setIsEditing(tasks.id)
                                setEditedTask(t.name)
                            }
                        }}>{isEditing===tasks.id ? "Save" :"Edit"}</button>

                        <button onClick={()=>{
                            setTaskArray(taskArray.filter(t=>t.id !== tasks.id))
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;