import React from "react";

export class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.increaseCounter = this.increaseCounter.bind(this);

    this.state = {
      counter: 0,
      step: props.step,
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   debugger;
  //   console.log("componentWillReceiveProps", nextProps);
  //   this.setState({ step: nextProps.inc });
  // }

  static getDerivedStateFromProps(nextProps, oldV){
    return { step: nextProps.inc }
  }

  increaseCounter = () => {
    // debugger;
    // this.state.counter++;
    this.setState({ counter: this.state.counter + this.state.step });

    // setTimeout(() => {
    //     this.setState({counter: this.state.counter +1})
    // }, 1000);
  };
  render() {
    // intotdeauna se va randa componenta INCA O DATA, DACA se va modifica starea componentei folosind setState
    debugger;
    return (
      <div>
        <h1>Hello rr {this.state.counter} </h1>
        <button onClick={this.increaseCounter}>+++</button>
      </div>
    );
  }
}
