// src/
import "./Stats.css";
import { useState } from "react";
import { Stats_detail } from "./Stats_detail";
import { monthStatStore } from "../store/store";
import { weekStatStore } from "../store/store";
import { dayStatStore } from "../store/store";

export const Stats = () => {
  const [spreadBtn, setSpreadBtn] = useState("");
  const [shrinkBtn, setShrinkBtn] = useState("hide");
  const [statsDetailContainer, setStatsDetailContainer] = useState("hide");

  const handleSpreadBtn = () => {
    setShrinkBtn("");
    setSpreadBtn("hide");
    setStatsDetailContainer("");
  };

  const handleShrinkBtn = () => {
    setShrinkBtn("hide");
    setSpreadBtn("");
    setStatsDetailContainer("hide");
  };

  return (
    <div className="Stats">
      <div className="header">
        <span>Total: <span className="counter">1234</span></span>
        <h2>Worked Hours</h2>
        <div className={`${spreadBtn} spreadBtn`} onClick={handleSpreadBtn}></div>
        <div className={`${shrinkBtn} shrinkBtn`} onClick={handleShrinkBtn}></div>
      </div>
      <div className={`${statsDetailContainer} stats_detail`}>
        <Stats_detail h2="month" store={monthStatStore()} />
        <Stats_detail h2="week" store={weekStatStore()} />
        <Stats_detail h2="day" store={dayStatStore()} />
      </div>
    </div>
  );
};
