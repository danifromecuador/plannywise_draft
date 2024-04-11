// src/tasks/Tasks.jsx

import { useState } from 'react'
import { TaskStore } from '../store/store'
import './Tasks.css'

export const Tasks = () => {
  const taskStore = TaskStore()
  const [input, setInput] = useState("")

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input && input[0] !== " ") {
      taskStore.addCompletedTask(input)
      setInput("")
    }
  }

  return (
    <div className="tasks">
      <h1>Task Tracker</h1>
      <span>Worked hours {taskStore.workedHours}</span>
      <ul>
        {
          taskStore.completedTasks.map((ct) => (<li key={ct.time}>{ct.time}{ct.text}</li>))
        }
      </ul>
      <div >
        <button onClick={() => taskStore.deleteTasks()}>Delete All Tasks</button>
        <div>
          <span>12:15 -12:30</span>
          <input
            type="text"
            placeholder='Type a completed task and press Enter'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleEnterKey(e)}
          />
        </div>
      </div>
    </div>
  )
}