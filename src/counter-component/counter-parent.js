import React from "react";

import { Counter } from "./counter";
import { Counter1 } from "./counter1";
export default class CounterParent extends React.Component {
  state = {
    inc: 0,
  };
  onCounterZeroClick = (value) => {
    debugger;
    this.setState({ inc: value });
  };

  render() {
    return (
      <div>
        <Counter start={10} onclick={this.onCounterZeroClick}></Counter>
        <Counter1 inc={this.state.inc}></Counter1>
      </div>
    );
  }
}
