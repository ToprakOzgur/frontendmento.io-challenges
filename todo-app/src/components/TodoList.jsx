import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { ACTIONS } from "../App";

const TodoList = ({ dispatch, todos }) => {
  const [selectedTodos, setSelectedTodos] = useState("all");

  const [listedTodos, setListedTodos] = useState([...todos]);

  useEffect(() => {
    setListedTodos(selectTodos());
  }, [todos, selectedTodos]);

  function selectTodos() {
    if (selectedTodos === "active") return todos.filter((x) => !x.completed);
    if (selectedTodos === "completed") return todos.filter((x) => x.completed);
    if (selectedTodos === "all") return [...todos];
    return [];
  }

  return (
    <div className="todo">
      <div className="content">
        {listedTodos?.map((todo, index) => (
          <Todo {...todo} dispatch={dispatch} key={index} />
        ))}
      </div>
      <div className="actions">
        <p>{listedTodos?.length} items left</p>
        <div className="actions__buttons">
          <button onClick={() => setSelectedTodos("all")}>All</button>
          <button onClick={() => setSelectedTodos("active")}>Active</button>
          <button onClick={() => setSelectedTodos("completed")}>Completed</button>
        </div>
        <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
