// src/alarm/alarm_logic.js

import { AlarmStore } from "../store/store.js";
import alarmSound from './assets/alarm.wav'

// following functions will be used in //src/store/store.js

export const changeAlarmState = (set) => {
  const alarmState = AlarmStore.getState().alarmState
  if (alarmState === "Alarm is ON") set({ alarmState: "Alarm is OFF", alarmMessage: "Click to turn on" })
  else set({ alarmState: "Alarm is ON", alarmMessage: "Click to turn off" })
}

export const getTime = () => ({
  y: new Date().getFullYear(),
  M: new Date().getMonth() + 1,
  d: new Date().getDate(),
  h: new Date().getHours(),
  // h: 23,
  m: new Date().getMinutes(),
  // m: 45,
  s: new Date().getSeconds(),
  ms: new Date().getMilliseconds(),
})

export const nextInterval = () => {
  let h = getTime().h
  const m = getTime().m
  let nextM = m - m % 15 + 15
  if (nextM === 60) { nextM = 0; h += 1 }
  if (h === 24) h = 0
  return `${h.toString().padStart(2, "0")}:${nextM.toString().padStart(2, "0")}`
}

export const playAlarm = () => {
  const alarmState = AlarmStore.getState().alarmState
  const m = getTime().m
  const s = getTime().s
  const audio = new Audio(alarmSound)
  if (alarmState === "Alarm is ON" && m % 15 === 0 && s === 0) audio.play()
  if (alarmState === "Alarm is ON" && m % 15 === 0 && s < 8) return "alarm is playing"
}