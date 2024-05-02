// src/
import "./Stats.css"
import { Stats_detail } from "./Stats_detail";

export const Stats = () => {
  return (
    <div className="Stats">
      <h1>Worked Hours</h1>
      <div className="stats_detail">
        <Stats_detail h2="month"/>
        <Stats_detail h2="week"/>
        <Stats_detail h2="day"/>
      </div>
    </div>
  )
}
