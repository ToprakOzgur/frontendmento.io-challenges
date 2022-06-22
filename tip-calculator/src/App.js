import "./App.css";
import { createContext, useEffect, useState } from "react";

import Input from "./components/Input";
import Display from "./components/Display";
import Footer from "./components/Footer";

export const AppContext = createContext();

function App() {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0.1);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [resetInputs, setResetInputs] = useState(false);

  function reset() {
    setBill(0);
    setNumberOfPeople(1);
    setTipPercentage(0.1);
    setResetInputs((prev) => !prev);
  }

  useEffect(() => {
    setTipAmountPerPerson((bill * tipPercentage) / numberOfPeople);
    setTotalPerPerson(bill / numberOfPeople + (bill * tipPercentage) / numberOfPeople);
  }, [bill, tipPercentage, numberOfPeople]);

  return (
    <AppContext.Provider value={{ reset, tipAmountPerPerson, totalPerPerson, resetInputs, setBill, setNumberOfPeople, setTipPercentage, tipPercentage }}>
      <header>
        <h1>SPLITTER</h1>
      </header>
      <main>
        <section className="splitter">
          <Input />
          <Display />
        </section>
      </main>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
