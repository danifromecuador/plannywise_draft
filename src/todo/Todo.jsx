// src/todo/Todo.jsx

import { useState } from 'react'
import { TodoStore } from '../store/store.js'
import './Todo.css'

export const Todo = () => {
  const todoStore = TodoStore()
  const [input, setInput] = useState("")
  const handleEnterKey = (e) => {
    if (e.key === "Enter" && input[0] !== " ") {
      todoStore.addTodo(input)
      setInput("")
    }
  }
  return (
    <div className="todo">
      <ul>
        {
          todoStore.todos.map((t) => (<li>{t.index}...{t.text}</li>))
        }
        {
          todoStore.dones.map((d) => (<li>{d.index}...{d.text}</li>))
        }
      </ul>
      <button>
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
  )
}