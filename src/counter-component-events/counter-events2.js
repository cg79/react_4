import React from "react";

export class CounterEvents2 extends React.Component {
  
  step = 0;
  constructor(props) {
      super(props);
      debugger;
      this.increaseCounter = this.increaseCounter.bind(this);

      this.state = {
        counter: 0,
        step:0,
      };

      const {counterEvents} = this.props;
      counterEvents.handlers.onStepIncrease = (step) => {
        debugger;
        this.step = step;
      }
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    console.log('componentWillReceiveProps', nextProps);
    this.setState({step:nextProps.inc});
}

  increaseCounter = () => {
    // debugger;
    // this.state.counter++;
    this.setState({counter: this.state.counter + this.step})

    // setTimeout(() => {
    //     this.setState({counter: this.state.counter +1})
    // }, 1000);
  }
  render() {
      // intotdeauna se va randa componenta INCA O DATA, DACA se va modifica starea componentei folosind setState
    debugger;
    return (
      <div>
        <h1>Hello Counter events bottom {this.state.counter} </h1>
        <button onClick={this.increaseCounter}>+++</button>
      </div>
    );
  }
}
