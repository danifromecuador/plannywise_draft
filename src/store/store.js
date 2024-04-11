// src/store/store.js

import { create } from 'zustand'
import { changeAlarmState, nextInterval, playAlarm } from '../alarm/alarm_logic.js'

export const AlarmStore = create((set) => ({
  alarmState: "Alarm is ON",
  alarmMessage: "Click to turn off",
  changeAlarmState: () => changeAlarmState(set),
  nextInterval: () => nextInterval(),
  playAlarm: () => playAlarm(),
}));

export const TodoStore = create((set) => ({
  todos: [{ index: 123, text: "first text" }, { index: 234, text: "second text" }],
  dones: [{ index: 123, text: "done first text" }, { index: 234, text: "done second text" }],
  addTodo: (input) => set((state) => ({ todos: [...state.todos, {index:222, text:input}] })),

}))