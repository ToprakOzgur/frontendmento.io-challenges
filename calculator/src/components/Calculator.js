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
          dispatch({ type: ACTIONS.INPUT, payload: 0 });
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 1 });
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 2 });
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 3 });
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 4 });
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 5 });
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 6 });
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 7 });
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 8 });
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INPUT, payload: 9 });
        }}
      >
        9
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.SUBTRACT });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.MULTIPLY });
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DIVIDE });
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE });
        }}
      >
        DEL
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RESET });
        }}
      >
        RESET
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RESULT });
        }}
      >
        =
      </button>
      <p>{state.value}</p>
    </div>
  );
};

export default Calculator;
