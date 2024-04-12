// src/todo/todo_logic.js

import { getIndex } from '../alarm/alarm_logic.js'

export const addTodo = (set, input) => set((state) => ({ todos: [...state.todos, { index: getIndex(), text: input }] }))

export const markAsDone = (set, todo) => {
  set((state) => ({ dones: sortList([...state.dones, todo]) }))
  set((state) => ({ todos: sortList(state.todos.filter(t => t.index !== todo.index)) }))
}

export const markAsUnDone = (set, done) => {
  set((state) => ({ todos: sortList([...state.todos, done]) }))
  set((state) => ({ dones: sortList(state.dones.filter(d => d.index !== done.index)) }))
}

const sortList = (list) => list.sort((a, b) => a.index - b.index)
