// src/main/App.jsx

import { Alarm } from '../alarm/Alarm.jsx'
import { Todo } from '../todo/Todo.jsx'
import { Tasks } from '../tasks/Tasks.jsx'
import { dailyTodoStore } from '../store/store.js'

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <Alarm />
      <div className="todo-and-tasks">
      <Todo dailyTodoStore={dailyTodoStore()} dailyTodos={"dailyTodos"} dailyDones={"dailyDones"}/>
      <Tasks />
      </div>
    </div>
  )
}