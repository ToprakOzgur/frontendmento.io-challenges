import React, { useContext } from "react";
import { AppContext } from "../App";

const ResetButton = () => {
  const { reset } = useContext(AppContext);
  return (
    <button
      className="reset"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      onClick={reset}
    >
      RESET
    </button>
  );
};

export default ResetButton;
