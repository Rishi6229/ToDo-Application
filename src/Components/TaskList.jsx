import React, { useState } from 'react'

function TaskList(props) {
    const [index, setIndex] = useState(0);
    const [taskArray, setTaskArray] = useState([]);

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
                }
            }}>Add Task</button>

            <ul>
                {taskArray.map(tasks => (
                    <li key={tasks.id}>
                        {tasks.name}
                        <button onClick={() => {
                            setTaskArray(taskArray.filter(task => task.id !== tasks.id));
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;