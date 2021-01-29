import React from "react";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class Counter extends React.Component {
  
  constructor(props) {
      super(props);
      debugger;
      this.increaseCounter = this.increaseCounter.bind(this);

      this.state = {
        counter: props.start,
      };
  }

  increaseCounter = () => {
    // debugger;
    // this.state.counter++;
    this.setState({counter: this.state.counter +1}, () => {
      this.props.onclick(this.state.counter);
    });
    

    // setTimeout(() => {
    //     this.setState({counter: this.state.counter +1})
    // }, 1000);
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
        <DatePicker selected={this.dat} onChange={date => this.setStartDate(this.dat)} />
      </div>
    );
  }
}
