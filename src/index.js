import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Counter from "./Components/Counter/counter";
import store from "./store";
import { Provider } from "react-redux"
const App = () => {
  return (
    <Provider store = { store }>
        <Counter />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))