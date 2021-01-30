import React from "react";

import { CounterEventsObserver1 } from "./counter-events-observer1";
import { CounterEventsObserver2 } from "./counter-events-observer2";
import Observer from './Observer';
export class CounterParentObserver extends React.Component {
  

  render() {
    return (
      <div>
        <CounterEventsObserver1 observer={Observer}></CounterEventsObserver1>
        <CounterEventsObserver2 observer={Observer}></CounterEventsObserver2>
      </div>
    );
  }
}
