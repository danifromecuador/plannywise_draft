// src/store/store.js

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  changeAlarmState,
  nextInterval,
  previousInterval,
  playAlarm,
} from "../alarm/alarm_logic.js";
import { addTodo, markAsDone, markAsUnDone } from "../todo/todo_logic.js";
import { addCompletedTask, workedHours } from "../tasks/tasks_logic.js";
import { previousDays, previousMonths, previousWeeks } from "./stats_logic.js";

export const AlarmStore = create(
  devtools((set) => ({
    alarmState: "Alarm is ON",
    alarmMessage: "Click to turn off",
    changeAlarmState: () => changeAlarmState(set),
    previousInterval: () => previousInterval(),
    nextInterval: () => nextInterval(),
    playAlarm: () => playAlarm(),
  }))
);

export const dailyTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("dailyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("dailyDones")) || [],
  addTodo: (input) => addTodo(set, input),
  markAsDone: (todo) => markAsDone(set, todo),
  markAsUnDone: (done) => markAsUnDone(set, done),
  deleteAllCompleted: () => set({ dones: [] }),
}));

export const weeklyTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("weeklyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("weeklyDones")) || [],
  addTodo: (input) => addTodo(set, input),
  markAsDone: (todo) => markAsDone(set, todo),
  markAsUnDone: (done) => markAsUnDone(set, done),
  deleteAllCompleted: () => set({ dones: [] }),
}));

export const monthlyTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("monthlyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("monthlyDones")) || [],
  addTodo: (input) => addTodo(set, input),
  markAsDone: (todo) => markAsDone(set, todo),
  markAsUnDone: (done) => markAsUnDone(set, done),
  deleteAllCompleted: () => set({ dones: [] }),
}));

export const TaskStore = create((set) => ({
  completedTasks: JSON.parse(localStorage.getItem("completedTasks")) || [],
  addCompletedTask: (input) => addCompletedTask(set, input),
  workedHours: () => workedHours(),
  deleteAllTasks: () => set({ completedTasks: [] }),
}));

export const dayStatStore = create(() => ({
  current: () => workedHours(),
  previous: previousDays(),
}));

export const weekStatStore = create(() => ({
  current: () => workedHours(),
  previous: previousWeeks(),
}));

export const monthStatStore = create(() => ({
  current: () => workedHours(),
  previous: previousMonths(),
}));
