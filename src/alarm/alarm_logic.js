// src/alarm/alarm_logic.js

import { AlarmStore } from "../store/store.js";

// following functions will be used in //src/store/store.js

export const changeAlarmState = (set) => {
  const alarmState = AlarmStore.getState().alarmState
  if (alarmState === "Alarm is ON") set({ alarmState: "Alarm is OFF", alarmMessage: "Click to turn on" })
  else set({ alarmState: "Alarm is ON", alarmMessage: "Click to turn off" })
}
