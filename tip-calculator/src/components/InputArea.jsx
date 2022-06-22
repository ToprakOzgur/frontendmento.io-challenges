import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const InputArea = ({ placeholder, action, inputClass, label, name }) => {
  const { resetInputs } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(() => "");
  }, [resetInputs]);

  function setAction(a) {
    action(a);
  }
  return (
    <div className="input-section">
      <label htmlFor={name}>{label}</label>
      <input
        className={inputClass}
        type="number"
        placeholder={placeholder}
        name={name}
        id={name}
        value={inputValue}
        onChange={(e) => {
          setInputValue(() => Number(e.target.value));
          setAction(e.target.value);
        }}
      />
    </div>
  );
};

export default InputArea;
