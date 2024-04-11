// src/tasks/Tasks.jsx

import { TaskStore } from '../store/store'
import './Tasks.css'

export const Tasks = () => {
  const taskStore = TaskStore()
  return (
    <div className="tasks">
      <h1>Task Tracker</h1>
      <span>Todays worked hours: 23</span>
      <ul>
        {
          taskStore.completedTasks.map((ct)=>(<li>{ct.date}{ct.text}</li>))
        }
      </ul>
      <div >
        <button>Reset todays tasks</button>
        <div>
          <span>12:15 -12:30</span>
          <input
            type="text"
            placeholder='Type a completed task and press Enter'
          />
        </div>
      </div>
    </div>
  )
}