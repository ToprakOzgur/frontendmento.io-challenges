import React, { useContext } from "react";
import { AppContext } from "../App";
import InputArea from "./InputArea";
import TipButtons from "./TipButtons";

const Input = () => {
  const { setBill, setNumberOfPeople } = useContext(AppContext);

  function click(e) {
    console.log(e);
  }
  return (
    <article className="input" onClick={click}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hesapla");
        }}
      >
        <InputArea label="Bill" placeholder="0" inputClass="bill-input" name="bill" action={setBill} />
        <TipButtons />
        <InputArea label="Number of People" placeholder="1" inputClass="people-input" name="people" action={setNumberOfPeople} />
      </form>
    </article>
  );
};

export default Input;
