import { useEffect, useState } from 'react'
import { AlarmStore } from '../store/store.js'
import { Settings } from '../settings/Settings.jsx'
import './Alarm.css'

export const Alarm = () => {
  const { alarmState, alarmMessage, changeAlarmState, nextInterval, previousInterval, playAlarm } = AlarmStore()
  const [alarmStatus, setAlarmStatus] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAlarmStatus(playAlarm())
      previousInterval()
    }, 1000)
    return () => clearInterval(intervalId)
  }, [alarmState, playAlarm, previousInterval])

  return (
    <div className="alarm">
      <div className="settings-alarm-left">
        <Settings />
        <div className="alarm-left"onClick={changeAlarmState}>
          <span>{alarmState} </span>
          <span>{alarmMessage}</span>
        </div>
      </div>

      <div className={`alarm-center ${alarmState === "Alarm is OFF" ? "hide" : ""}`}>
        <span>Alarm will sound </span>
        <span>every <span>15</span> minutes</span>
      </div>
      <div className={`alarm-right ${alarmState === "Alarm is OFF" ? "hide" : ""}`}>
        {alarmStatus === "alarm is playing" ?
          (<><span>Alarm is playing</span><span>right now</span></>) :
          (<><span>Next alarm will sound </span><span>at <span>{nextInterval()}</span></span></>)
        }
      </div>
    </div>
  )
}
