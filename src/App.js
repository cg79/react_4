import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Counter } from "./counter-component/counter";
import { Counter1 } from "./counter-component/counter1";

export class App extends React.Component {
  state = {
    inc: 0,
  };
  onCounterZeroClick = (value) => {
    debugger;
    this.setState({ inc: value });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Counter start={10} onclick={this.onCounterZeroClick}></Counter>
          <Counter1 inc={this.state.inc}></Counter1>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
