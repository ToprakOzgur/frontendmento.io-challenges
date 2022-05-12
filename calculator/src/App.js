import React, { createContext, useMemo, useReducer } from "react";
import Calculator from "./components/Calculator";

const initialState = {
  accumulator: 0,
  currentOperator: null,
  displayValue: "0",
  isInTheMiddleOfTyping: false,
  operand: 0,
};
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

function performOperation(newOperation, state) {
  if (state.currentOperator) {
    const result = state.currentOperator(parseFloat(state.operand), parseFloat(state.displayValue));
    return {
      accumulator: result,
      currentOperator: newOperation,
      displayValue: "" + result,
      isInTheMiddleOfTyping: false,
      operand: result,
    };
  }
  return {
    ...state,
    currentOperator: newOperation,
    isInTheMiddleOfTyping: false,
    operand: state.displayValue,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "input":
      if (state.isInTheMiddleOfTyping) {
        return {
          ...state,
          displayValue: "" + state.displayValue + action.payload,
        };
      } else {
        return {
          ...state,
          displayValue: action.payload,
          isInTheMiddleOfTyping: true,
        };
      }

    case "add":
      return performOperation((a, b) => a + b, state);
    case "subtract":
      return performOperation((a, b) => a - b, state);
    case "multiply":
      return performOperation((a, b) => a * b, state);
    case "divide":
      return performOperation((a, b) => a / b, state);
    case "delete":
      return { ...state, displayValue: "0", isInTheMiddleOfTyping: false };
    case "reset":
      return { ...initialState };
    case "result":
      return performOperation(null, state);
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
