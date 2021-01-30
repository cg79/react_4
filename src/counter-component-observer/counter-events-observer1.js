import React from "react";
import PropTypes from 'prop-types';

import { EVENT_NAMES } from './EventNames';
import Observer from "./Observer";


export class CounterEventsObserver1 extends React.Component {
  
  constructor(props) {
      super(props);
      debugger;

      this.state = {
        counter: 0,
      };
  }

  increaseCounter = () => {
    this.setState({counter: this.state.counter +1}, () => {
      this.props.observer.publish(EVENT_NAMES.INCREASE_STEPS, this.state.counter);
    });
    

  }

  render() {
    
    return (
      <div>
        <h1>Hello rr {this.state.counter} </h1>
        <button onClick={this.increaseCounter}>+++</button>
      </div>
    );
  }
}

CounterEventsObserver1.propTypes = {
  observer: PropTypes.instanceOf(Observer)
};
