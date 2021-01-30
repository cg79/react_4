import React from "react";
import PropTypes from 'prop-types';

import Observer from "./Observer";
import { EVENT_NAMES } from './EventNames';

export class CounterEventsObserver2 extends React.Component {
  step = 0;
  constructor(props) {
    super(props);
    debugger;
    this.increaseCounter = this.increaseCounter.bind(this);

    this.state = {
      counter: 0,
      step: 0,
    };

    const { observer } = this.props;
    observer.subscribe(EVENT_NAMES.INCREASE_STEPS, this, (step) => {
      this.step = step;
    });
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + this.step });
  };
  render() {
    // intotdeauna se va randa componenta INCA O DATA, DACA se va modifica starea componentei folosind setState
    debugger;
    return (
      <div>
        <h1>Hello Counter events OBSERVER bottom {this.state.counter} </h1>
        <button onClick={this.increaseCounter}>+++</button>
      </div>
    );
  }

}

CounterEventsObserver2.propTypes = {
  observer: PropTypes.instanceOf(Observer),
};
