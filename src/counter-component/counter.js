import React from "react";


export class Counter extends React.Component {
  
  constructor(props) {
      super(props);
      debugger;
      this.increaseCounter = this.increaseCounter.bind(this);

      this.state = {
        counter: props.start || 0,
      };
  }

  increaseCounter = () => {
    this.setState({counter: this.state.counter +1}, () => {
      this.props.onclick(this.state.counter);
    });
  }

  dat = new Date();
  setStartDate = () => {

  }
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
