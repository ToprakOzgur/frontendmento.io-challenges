import React, { useEffect, useContext } from "react";
import ResetButton from "./ResetButton.jsx";
import { AppContext } from "../App";

const Display = () => {
  const { totalPerPerson, tipAmountPerPerson, reset } = useContext(AppContext);
  useEffect(() => {
    console.log("totalPerPerson : " + totalPerPerson);
  }, [tipAmountPerPerson, totalPerPerson]);

  return (
    <article className="display">
      <div>
        <div className="display__tip">
          <div className="display__title">
            <p>Tip Amount</p>
            <small>/ person</small>
          </div>
          <div className="result">
            <span>$</span>
            <span>{tipAmountPerPerson.toFixed(2)}</span>
          </div>
        </div>
        <div className="display__total">
          <div className="display__title">
            <p>Total</p>
            <small>/ person</small>
          </div>
          <div className="result">
            <span>$</span>
            <span>{totalPerPerson.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <ResetButton reset={reset} />
    </article>
  );
};

export default Display;
