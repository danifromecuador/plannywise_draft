import { useState } from 'react'
import './Settings.css'

export const Settings = () => {
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")
  const handleHide = () => {
    if (hide1 === "") {
      setHide1("hide")
      setHide2("")
    } else {
      setHide1("")
      setHide2("hide")
    }
  }

  return (
    <div className="settings">
      <div className={`icon ${hide1}`} onClick={handleHide}>
        ?
      </div>
      <div className={`modal ${hide2}`}>
        <button onClick={handleHide}>X</button>
        <div>a lot of things in this div</div>
      </div>
    </div>
  )
}