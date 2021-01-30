import React from "react";



export class CounterEvents1 extends React.Component {
  
  constructor(props) {
      super(props);
      debugger;
      this.increaseCounter = this.increaseCounter.bind(this);

      this.state = {
        counter: 0,
      };
  }

  increaseCounter = () => {
    this.setState({counter: this.state.counter +1}, () => {
      this.props.counterEvents.handlers.onStepIncrease(this.state.counter);
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
