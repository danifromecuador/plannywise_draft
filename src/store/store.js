// src/store/store.js

import { create } from 'zustand'
import { changeAlarmState, nextInterval, previousInterval, playAlarm } from '../alarm/alarm_logic.js'
import { addTodo, markAsDone, markAsUnDone } from '../todo/todo_logic.js'

import { addCompletedTask } from '../tasks/tasks_logic.js'

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
  previousInterval: () => previousInterval(),
  workedHours: 23,
  completedTasks: [{ interval: 123, text: "text one" }, { interval: 456, text: "text two" }],
  addCompletedTask: (input) => addCompletedTask(set, input),
  deleteTasks: () => set({ completedTasks: [] }),
}))
