// src/todo/Todo.jsx

import { useState, useEffect } from 'react'
import './Todo.css'

export const Todo = ({ store, todos, dones}) => {
  const [input, setInput] = useState("")
  const [collapseClass, setCollapseClass] = useState("")
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input && input[0] !== " ") {
      store.addTodo(input)
      setInput("")
    }
  }

  useEffect(() => {
    localStorage.setItem(`${todos}`, JSON.stringify(store.todos))
    localStorage.setItem(`${dones}`, JSON.stringify(store.dones))
  }, [store])

  const calculateCompletedPercentage = () => Math.floor((store.dones.length / (store.todos.length + store.dones.length)) * 100)

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
      <ul className={` ${collapseClass} ${store.todos.length === 0 && store.dones.length === 0 ? "hide" : ""}`}>
        {store.todos.map((t) => (<li key={t.index} className='todo-todo' onClick={() => store.markAsDone(t)}>{t.text} </li>))}
        {store.dones.map((d) => (<li key={d.index} className='todo-done' onClick={() => store.markAsUnDone(d)}>{d.text}</li>))}
      </ul>
      <div className={collapseClass === "" ? "button-and-input" : "hide"}>
        <button onClick={() => store.deleteAllCompleted()}>
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
