// src/
import "./Stats.css"
import { Stats_detail } from "./Stats_detail";
import { monthStatStore } from "../store/store";
import { weekStatStore } from "../store/store";
import { dayStatStore } from "../store/store";

export const Stats = () => {
  return (
    <div className="Stats">
      <h2>Worked Hours</h2>
      <div className="stats_detail">
        <Stats_detail h2="month" store={monthStatStore()}/>
        <Stats_detail h2="week" store={weekStatStore()}/>
        <Stats_detail h2="day" store={dayStatStore()}/>
      </div>
    </div>
  )
}
