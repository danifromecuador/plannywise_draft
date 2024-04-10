// src/alarm/Alarm.jsx

import {AlarmStore} from '../store/store.js'
import './Alarm.css'

export const Alarm = () => {
  const alarmStore = AlarmStore.getState()
  return (
    <div className="alarm">
      <div className="alarm-left">
        <span>Alarm is ON </span>
        <span>Click to turn off</span>
      </div>
      <div className="alarm-center">
        <span>Alarm will sound </span>
        <span>every <span>15</span> minutes</span>
      </div>
      <div className="alarm-right">
        <span>Next alarm will sound </span>
        <span>at <span>15:30</span></span>
      </div>
    </div>
  )
}