import React, { createContext, useMemo, useReducer } from "react";
import Calculator from "./components/Calculator";

const initialState = { value: 0, currentOperator: (a, b) => a, displayValue: 0 };

export const ACTIONS = {
  INPUT: "input",
  ADD: "add",
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
  DELETE: "delete",
  RESET: "reset",
  RESULT: "result",
};
function reducer(state, action) {
  switch (action.type) {
    case "input":
      return { ...state, displayValue: (state.displayValue + action.payload).toString() };
    // return { ...state, displayValue: state.displayValue === 0 ? "" + action.payload : "" + state.displayValue + action.payload };
    case "add":
      return { ...state, currentOperator: (a, b) => a + b };
    case "subtract":
      return { ...state, currentOperator: (a, b) => a - b };
    case "multiply":
      return { ...state, currentOperator: (a, b) => a * b };
    case "divide":
      return { ...state, currentOperator: (a, b) => a / b };
    case "delete":
      return { ...state, currentOperator: (a, b) => a, displayValue: 0 };
    case "reset":
      return { ...initialState };
    case "result":
      return { state: state.currentOperator(state.value, action.payload), currentOperator: (a) => a, displayValue: state.value };
    default:
      return state;
  }
}

export const StateContext = createContext();
export const DispatchContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Calculator />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
