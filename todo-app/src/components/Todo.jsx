import React from "react";
import { ACTIONS } from "../App";
const Todo = ({ id, desc, completed, dispatch }) => {
  return (
    <div className="singleTodo">
      <p className="todo">{desc}</p>
      <button onClick={() => dispatch({ type: ACTIONS.COMPLETE, payload: id })}>complete</button>
      {completed && "completed"}
    </div>
  );
};

export default Todo;
