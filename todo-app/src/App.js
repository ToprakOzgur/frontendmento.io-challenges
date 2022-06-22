import "./main.css";

import { useReducer, useState } from "react";
import Sun from "./images/icon-sun.svg";
import Moon from "./images/icon-moon.svg";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

export const ACTIONS = {
  ADD: "add",
  CLEAR: "clear",
  COMPLETE: "complete",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      if (!action.payload) return state;
      return [...state, { id: state.length + 1, desc: action.payload, completed: false }];
    case ACTIONS.CLEAR:
      return state.filter((x) => !x.completed);
    case ACTIONS.COMPLETE:
      return state.map((x) => {
        if (x.id === action.payload) {
          return { ...x, completed: true };
        }
        return x;
      });

    default:
      return state;
  }
}

function App() {
  const initState = [
    { id: 1, desc: "deneme11", completed: false },
    { id: 2, desc: "deneme22", completed: false },
  ];
  const [state, dispatch] = useReducer(reducer, initState);

  const [isDarkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    document.body.classList.toggle("black");
    setDarkTheme((prev) => !prev);
  }
  return (
    <main className="app">
      <article>
        <header>
          <h1>TODO</h1>
          <div onClick={changeTheme}>
            {isDarkTheme ? <img src={Sun} alt="Sun" className="themeButton" /> : <img src={Moon} alt="Moon" className="themeButton" />}
          </div>
        </header>
        <NewTodo dispatch={dispatch} />
        <TodoList todos={state} dispatch={dispatch} />
      </article>
    </main>
  );
}

export default App;
