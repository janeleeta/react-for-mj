import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when search for 'keyword'");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when i count");
  }, [counter]);
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="search here"
        value={keyword}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
