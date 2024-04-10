// src/alarm/Alarm.jsx

import {AlarmStore} from '../store/store.js'
import './Alarm.css'

export const Alarm = () => {
  const alarmStore = AlarmStore.getState()
  return (
    <div className="alarm">
      Alarm Interval : {alarmStore.interval}
    </div>
  )
}