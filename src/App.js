import { useState } from "react";
import "./styles.css";

export default function App() {
  // hooks
  const [userInput, setUserInput] = useState("");
  // functions
  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };
  // main rendrer
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="burger-emoji">
          🍔
        </span>{" "}
        Food & drink emoji interpreter
      </h1>
      <input onChange={inputChangeHandler} type="text" />
      <p>{userInput}</p>
    </div>
  );
}
