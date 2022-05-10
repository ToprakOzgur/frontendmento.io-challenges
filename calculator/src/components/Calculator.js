import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../App";
import { ACTIONS } from "../App";

const Calculator = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return (
    <div>
      <p>{state.displayValue}</p>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 5 });
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD });
        }}
      >
        add
      </button>
    </div>
  );
};

export default Calculator;
