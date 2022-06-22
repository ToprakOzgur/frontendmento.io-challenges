import React, { useState, useContext } from "react";
import { AppContext } from "../App";

const TipButtons = () => {
  const { setTipPercentage, tipPercentage } = useContext(AppContext);

  const [isCustomSelected, setIsCustomSelected] = useState(false);
  const [customInputValue, setCustomInputValue] = useState("");

  return (
    <div className="input-section">
      <label>Select Tip%</label>
      <div className="tip-amount-buttons">
        <button className={tipPercentage === 0.05 ? "active" : null} onClick={() => setTipPercentage(0.05)}>
          5%
        </button>
        <button className={tipPercentage === 0.1 ? "active" : null} onClick={() => setTipPercentage(0.1)}>
          10%
        </button>
        <button className={tipPercentage === 0.15 ? "active" : null} onClick={() => setTipPercentage(0.15)}>
          15%
        </button>
        <button className={tipPercentage === 0.25 ? "active" : null} onClick={() => setTipPercentage(0.25)}>
          25%
        </button>
        <button className={tipPercentage === 0.5 ? "active" : null} onClick={() => setTipPercentage(0.5)}>
          50%
        </button>
        {isCustomSelected ? (
          <input
            value={customInputValue}
            className="custom"
            type="number"
            name="custom"
            id="custom"
            placeholder="0"
            onChange={(e) => {
              setCustomInputValue(() => Number(e.target.value));
              setTipPercentage(() => Number(e.target.value) / 100);
            }}
          />
        ) : (
          <button onClick={() => setIsCustomSelected(true)}>custom</button>
        )}
      </div>
    </div>
  );
};

export default TipButtons;
