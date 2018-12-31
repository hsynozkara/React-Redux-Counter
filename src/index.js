import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Counter from "./components/counter";
import "./styles.css";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
