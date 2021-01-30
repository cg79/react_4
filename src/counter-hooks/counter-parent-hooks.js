import React from "react";

import { Counter } from "./counter";
import { Counter1 } from "./counter1";
export  class CounterParentHooks extends React.Component {
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
        <Counter onCounterZeroClick={this.onCounterZeroClick}></Counter>
        <Counter1 start={10} count={this.state.inc}></Counter1>
      </div>
    );
  }
}
