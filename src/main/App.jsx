// src/main/App.jsx

import { Alarm } from '../alarm/Alarm.jsx'
import { Todo } from '../todo/Todo.jsx'
import { Tasks } from '../tasks/Tasks.jsx'
import { dailyTodoStore } from '../store/store.js'
import { weeklyTodoStore } from '../store/store.js'

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <Alarm />
      <div className="todo-and-tasks">
        <div className="todos">
          <Todo store={dailyTodoStore()} title={"Daily Goals"} todos={"dailyTodos"} dones={"dailyDones"} />
          <Todo store={weeklyTodoStore()} title={"Weekly Goals"} todos={"weeklyTodos"} dones={"weeklyDones"} />
        </div>
        <Tasks />
      </div>
    </div>
  )
}