// src/tasks/Tasks.jsx

import { useState, useEffect } from 'react'
import { TaskStore } from '../store/store'
import { AlarmStore } from '../store/store'
import './Tasks.css'

export const Tasks = () => {
  const taskStore = TaskStore()
  const alarmStore = AlarmStore()
  const [input, setInput] = useState("")
  const [prevInterval, setPrevInterval] = useState("")

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input && input[0] !== " ") {
      taskStore.addCompletedTask(input)
      setInput("")
    }
  }

  useEffect(() => {
    setPrevInterval(taskStore.previousInterval())
  }, [alarmStore])

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(taskStore.completedTasks))
  }, [taskStore.completedTasks])

  return (
    <div className="tasks">
        <h1>Task Tracker</h1>
        <span className='tasks-worked-hours'>Worked hours&nbsp;<span className='tasks-worked-hours-number'>{taskStore.workedHours()}</span> </span>
      
      <ul className={taskStore.completedTasks.length === 0 ? "hide" : ""}>
        {
          taskStore.completedTasks.map((ct) => (<li key={ct.interval}>{ct.interval}&nbsp;&nbsp;&nbsp;{ct.text}</li>))
        }
      </ul>
      <div className='delete-btn-and-interval-and-input'>
        <button onClick={() => taskStore.deleteAllTasks()}>Delete All Tasks</button>
        <div className='interval-and-input'>
          <span className='interval-and-input-interval'>{prevInterval}</span>
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