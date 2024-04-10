// src/main/App.jsx

import { store } from '../store/store.js'
import { Alarm } from '../alarm/Alarm.jsx'
import './App.css'

export const App = () => {
  return (
    <div className="app">
      Hello Dani
      {store.getState().bears}
      <Alarm />
    </div>
  )
}