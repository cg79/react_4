import React from "react";

import { CounterEvents1 } from "./counter-events1";
import { CounterEvents2 } from "./counter-events2";
import CounterEvents from './CounterEvents';
export class CounterParentEvents extends React.Component {
  

  render() {
    return (
      <div>
        <CounterEvents1 start={10} counterEvents={CounterEvents}></CounterEvents1>
        <CounterEvents2 counterEvents={CounterEvents}></CounterEvents2>
      </div>
    );
  }
}
