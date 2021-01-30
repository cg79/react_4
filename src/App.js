import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Home from "./home/home";
import CounterParent  from "./counter-component/counter-parent";
import { CounterParentEvents } from "./counter-component-events/counter-parent-events";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends React.Component {
  state = {
    inc: 0,
  };
  onCounterZeroClick = (value) => {
    debugger;
    this.setState({ inc: value });
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/counter-events">Counter Events</Link>
            </li>
            
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> */}
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/counter">
              <CounterParent />
            </Route>
            <Route path="/counter-events">
              <CounterParentEvents />
            </Route>
            
            {/* <Route path="/dashboard">
              <Dashboard />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
