import React, { Component } from "react";

export default class CouterRedux extends Component {
  constructor(props) {
    super(props);
    debugger;

    this.state = {
      counter: props.start || 0,
    };
  }

  increaseCounter = () => {
    this.props.increment();
  };

  // componentWillReceiveProps(nextProps) {
  //   debugger;
  //   console.log("componentWillReceiveProps", nextProps);
  //   this.setState({ counter: nextProps.count });
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    //   if(nextProps.someValue!==prevState.someValue){
    //     return { someState: nextProps.someValue};
    //  }
    //  else return null;

    return { counter: nextProps.count };
  }

 

  render() {
    debugger;

    return (
      <div>
        <h1>Hello rr {this.state.counter} </h1>
        <button onClick={this.increaseCounter}>+++</button>
      </div>
    );
  }
}
