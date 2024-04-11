// src/store/store.js

import { create } from 'zustand'
import { changeAlarmState, nextInterval, playAlarm } from '../alarm/alarm_logic.js'
import { addTodo, markAsDone, markAsUnDone } from '../todo/todo_logic.js'

export const AlarmStore = create((set) => ({
  alarmState: "Alarm is ON",
  alarmMessage: "Click to turn off",
  changeAlarmState: () => changeAlarmState(set),
  nextInterval: () => nextInterval(),
  playAlarm: () => playAlarm(),
}));

export const TodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  dones: JSON.parse(localStorage.getItem("dones")) || [],
  addTodo: (input) => addTodo(set, input),
  markAsDone: (todo) => markAsDone(set, todo),
  markAsUnDone: (done) => markAsUnDone(set, done),
  deleteAllCompleted: () => set({ dones: [] })
}))

export const TaskStore = create((set) => ({
  workedHours: 23,
  completedTasks: [{ time: 123, text: "text one" }, { time: 456, text: "text two" }],
  addCompletedTask: (input) => set((state) => ({ completedTasks: [...state.completedTasks, { time: 222, text: input }] })),
  deleteTasks: () => set({ completedTasks: [] }),
}))
