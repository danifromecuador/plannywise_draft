// src/alarm/alarm_logic.js

import { AlarmStore } from "../store/store.js";

// following functions will be used in //src/store/store.js

export const changeAlarmState = (set) => {
  const alarmState = AlarmStore.getState().alarmState
  if (alarmState === "Alarm is ON") set({ alarmState: "Alarm is OFF", alarmMessage: "Click to turn on" })
  else set({ alarmState: "Alarm is ON", alarmMessage: "Click to turn off" })
}

const getTime = () => ({
  y: new Date().getFullYear(),
  M: new Date().getMonth() + 1,
  d: new Date().getDate(),
  h: new Date().getHours(),
  // h: 22,
  m: new Date().getMinutes(),
  // m: 45,
  s: new Date().getSeconds(),
})

export const nextInterval = () => {
  let h = getTime().h
  const m = getTime().m
  let nextM = m - m % 15 + 15
  if (nextM === 60) {
    nextM = 0
    h += 1
  }
  if (h === 24) h = 0
  return `${h}:${nextM.toString().padStart(2, "0")}`
}