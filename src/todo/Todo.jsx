// src/todo/Todo.jsx

import { useState, useEffect } from 'react'
import { TodoStore } from '../store/store.js'
import './Todo.css'

export const Todo = () => {
  const todoStore = TodoStore()
  const [input, setInput] = useState("")
  const [collapseClass, setCollapseClass] = useState("")
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input && input[0] !== " ") {
      todoStore.addTodo(input)
      setInput("")
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoStore.todos))
    localStorage.setItem("dones", JSON.stringify(todoStore.dones))
  }, [todoStore])

  const calculateCompletedPercentage = () => Math.floor((todoStore.dones.length / (todoStore.todos.length + todoStore.dones.length)) * 100)

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

  return (
    <div className="todo">
      <div className="header">
        <span className='todo-completed'>
          <span className={isNaN(calculateCompletedPercentage()) ? "hide" : ""}>Completed: </span>
          <span className={isNaN(calculateCompletedPercentage()) ? "hide" : "todo-completed-number"}>{calculateCompletedPercentage()}%</span>
        </span>
        <h1>Daily Goals</h1>
        <div className={`todo-collapse-up ${hide1}`} onClick={collapse}><div className="arrow-up"></div></div>
        <div className={`todo-collapse-down ${hide2}`} onClick={collapse}><div className="arrow-down"></div></div>
      </div>
      <ul className={` ${collapseClass} ${todoStore.todos.length === 0 && todoStore.dones.length === 0 ? "hide" : ""}`}>
        {todoStore.todos.map((t) => (<li key={t.index} className='todo-todo' onClick={() => todoStore.markAsDone(t)}>{t.text} </li>))}
        {todoStore.dones.map((d) => (<li key={d.index} className='todo-done' onClick={() => todoStore.markAsUnDone(d)}>{d.text}</li>))}
      </ul>
      <div className={collapseClass === "" ? "button-and-input" : "hide"}>
        <button onClick={() => todoStore.deleteAllCompleted()}>
          Delete All Completed
        </button>
        <input
          type="text"
          placeholder='Type a new goal and press Enter'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleEnterKey(e)}
        />
      </div>
    </div >
  )
}
