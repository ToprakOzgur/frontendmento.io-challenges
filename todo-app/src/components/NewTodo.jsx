import React, { useRef } from "react";
import { ACTIONS } from "../App";

const NewTodo = ({ dispatch }) => {
  const inputRef = useRef(null);

  function newTodo(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: inputRef.current.value });
    inputRef.current.value = "";
  }
  return (
    <form className="newTodo" onSubmit={newTodo}>
      <input ref={inputRef} type="text" placeholder="Create a new todo..." />
    </form>
  );
};

export default NewTodo;
