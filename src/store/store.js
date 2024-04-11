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