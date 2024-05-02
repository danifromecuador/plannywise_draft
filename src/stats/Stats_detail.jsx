// src/
import { useState } from "react";
import "./Stats_detail.css";
export const Stats_detail = ({ h2, store }) => {
  const [spreadBtn, setSpreadBtn] = useState("");
  const [shrinkBtn, setShrinkBtn] = useState("hide");
  const [previous, setPrevious] = useState("hide");

  const handleSpreadBtn = () => {
    setSpreadBtn("hide");
    setShrinkBtn("");
    setPrevious("");
  };

  const handleShrinkBtn = () => {
    setSpreadBtn("");
    setShrinkBtn("hide");
    setPrevious("hide");
  };

  return (
    <div className="Stats_detail">
      <div className="header">
        <span>This {h2}: <span className="counter">{store.current}</span></span>        
        <div className={`${spreadBtn} spreadBtn`}onClick={handleSpreadBtn}></div>
        <div className={`${shrinkBtn} shrinkBtn`} onClick={handleShrinkBtn}></div>
      </div>
      <ul className={previous}>
        {Object.entries(store.previous).map(([key, value]) => (
          <li key={key}>
            {`${key}: ${value}`} {/* Render key and value */}
          </li>
        ))}
      </ul>
    </div>
  );
};
