// src/store/store.js

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { changeAlarmState, nextInterval, previousInterval, playAlarm } from '../alarm/alarm_logic.js'
import { addTodo, markAsDone, markAsUnDone } from '../todo/todo_logic.js'
import { addCompletedTask, workedHours } from '../tasks/tasks_logic.js'

export const AlarmStore = create(devtools((set) => ({
  alarmState: "Alarm is ON",
  alarmMessage: "Click to turn off",
  changeAlarmState: () => changeAlarmState(set),
  previousInterval: () => previousInterval(),
  nextInterval: () => nextInterval(),
  playAlarm: () => playAlarm(),
})));

export const dailyTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("dailyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("dailyDones")) || [],
  addTodo: (input) => addTodo(set, input),
  markAsDone: (todo) => markAsDone(set, todo),
  markAsUnDone: (done) => markAsUnDone(set, done),
  deleteAllCompleted: () => set({ dones: [] })
}))

export const weeklyTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("weeklyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("weeklyDones")) || [],
  addTodo: (input) => addTodo(set, input),
  markAsDone: (todo) => markAsDone(set, todo),
  markAsUnDone: (done) => markAsUnDone(set, done),
  deleteAllCompleted: () => set({ dones: [] })
}))

export const monthlyTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("monthlyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("monthlyDones")) || [],
  addTodo: (input) => addTodo(set, input),
  markAsDone: (todo) => markAsDone(set, todo),
  markAsUnDone: (done) => markAsUnDone(set, done),
  deleteAllCompleted: () => set({ dones: [] })
}))

export const TaskStore = create((set) => ({
  completedTasks: JSON.parse(localStorage.getItem("completedTasks")) || [],
  addCompletedTask: (input) => addCompletedTask(set, input),
  workedHours: () => workedHours(),
  deleteAllTasks: () => set({ completedTasks: [] }),
}))

export const monthStatStore = create((set)=>({
  current: 122,
  previous: {
    jan: 1, feb: 2, mar: 3, apr: 4, jun: 9, jul: 12, ago: 0, sep: 2, oct:6, nov:12, dec:0
  }
}))

export const weekStatStore = create((set)=>({
  current: 12,
  previous: {
    w23: 12, w22: 11, w21: 12, w20: 0, w19:0
  }
}))

export const dayStatStore = create((set)=>({
  current: 2.4,
  previous: {
    mon:6, tue:12, wed: 5, thu:1, fri:9, sat:4
  }
}))