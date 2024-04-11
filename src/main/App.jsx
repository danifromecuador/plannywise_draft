// src/main/App.jsx

import { Alarm } from '../alarm/Alarm.jsx'
import { Todo } from '../todo/Todo.jsx'
import { Tasks } from '../tasks/Tasks.jsx'

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <Alarm />
      <Todo />
      <Tasks />
    </div>
  )
}