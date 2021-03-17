import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Counter from "./Components/Counter/counter";

const App = () => {
  return (
    <Counter />
  )
}

ReactDOM.render(<App />, document.getElementById("root"))