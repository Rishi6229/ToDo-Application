import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
       <h1>Task Manager Application</h1>
       <TodoForm/>
     </div>
  )
}

export default App
