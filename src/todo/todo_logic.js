// src/todo/todo_logic.js

import { getTime } from '../alarm/alarm_logic.js'

const getIndex = () => {
  const time = getTime()
  return Number(time.y.toString() + time.M.toString().padStart(2, "0") + time.d.toString().padStart(2, "0") + time.h.toString().padStart(2, "0") + time.m.toString().padStart(2, "0") + time.s.toString().padStart(2, "0") + time.ms.toString().padStart(3, "0"))
}

export const addTodo = (set, input) => {
  console.log(getIndex());
  set((state) => ({ todos: [...state.todos, { index: getIndex(), text: input }] }))
}

export const markAsDone = (set, todo) => {
  set((state) => ({ dones: [...state.dones, todo] }))
  set((state)=>({ todos: state.todos.filter(t => t.index !== todo.index) }))
}

export const markAsUnDone = (set, done) => {
  set((state) => ({ todos: [...state.todos, done] }))
  set((state)=>({ dones: state.dones.filter(d => d.index !== done.index) }))
}