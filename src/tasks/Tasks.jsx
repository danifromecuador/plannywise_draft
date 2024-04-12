// src/tasks/Tasks.jsx

import { useState, useEffect } from 'react'
import { AlarmStore } from '../store/store'
import { TaskStore } from '../store/store'
import './Tasks.css'

export const Tasks = () => {
  const taskStore = TaskStore()
  const alarmStore = AlarmStore()
  const [input, setInput] = useState("")
  const [previousInterval, setPreviousInterval] = useState("")
  const [collapseClass, setCollapseClass] = useState("")
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input && input[0] !== " ") {
      taskStore.addCompletedTask(input)
      setInput("")
    }
  }

  const collapse = () => {
    if (collapseClass === "") {
      setCollapseClass("hide")
      setHide1("hide")
      setHide2("")
    }
    else {
      setCollapseClass("")
      setHide1("")
      setHide2("hide")
    }
  }

  // update previousInterval state with alarmStore.previousInterval() value each second
  useEffect(() => {
    const intervalId = setInterval(() => setPreviousInterval(alarmStore.previousInterval()), 1000)
    return () => clearInterval(intervalId)
  }, [alarmStore])

  // save in local storage each time that a task is completed
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(taskStore.completedTasks))
  }, [taskStore.completedTasks])

  return (
    <div className="tasks">
      <div className="header">
        <span className='tasks-worked-hours'>
          Worked hours:&nbsp;
          <span className='tasks-worked-hours-number'>{taskStore.workedHours()}</span>
        </span>
        <h1>Task Tracker</h1>
        <div className={`tasks-collapse-up ${hide1}`} onClick={collapse}><div className="arrow-up"></div></div>
        <div className={`tasks-collapse-down ${hide2}`} onClick={collapse}><div className="arrow-down"></div></div>
      </div>
      <ul className={`${collapseClass}${taskStore.completedTasks.length === 0 ? "hide" : ""}`}>
        {taskStore.completedTasks.map((ct) => (<li key={ct.interval}>{ct.interval}&nbsp;&nbsp;&nbsp;{ct.text}</li>))}
      </ul>
      <div className={`delete-btn-and-interval-and-input ${collapseClass}`}>
        <button onClick={() => taskStore.deleteAllTasks()}>Delete All Tasks</button>
        <div className='interval-and-input'>
          <span className='interval-and-input-interval'>{previousInterval}</span>
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