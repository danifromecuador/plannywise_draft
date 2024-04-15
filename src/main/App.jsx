// src/main/App.jsx

import { Alarm } from '../alarm/Alarm.jsx'
import { Todo } from '../todo/Todo.jsx'
import { Tasks } from '../tasks/Tasks.jsx'
import { dailyTodoStore } from '../store/store.js'
import { weeklyTodoStore } from '../store/store.js'
import { monthlyTodoStore } from '../store/store.js'

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <Alarm />
      <div className="todos-tasks">
        <div className="todos">
          <Todo store={dailyTodoStore()} title={"Daily Goals"} todos={"dailyTodos"} dones={"dailyDones"} />
          <Todo store={weeklyTodoStore()} title={"Weekly Goals"} todos={"weeklyTodos"} dones={"weeklyDones"} />
          <Todo store={monthlyTodoStore()} title={"Monthly Goals"} todos={"monthlyTodos"} dones={"monthlyDones"} />
        </div>
        <Tasks />
      </div>
    </div>
  )
}