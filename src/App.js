import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Home from "./home/home";
import CounterParent from "./counter-component/counter-parent";
import { CounterParentEvents } from "./counter-component-events/counter-parent-events";
import { CounterParentObserver } from "./counter-component-observer/counter-parent-events-observer";
import { CounterParentHooks } from "./counter-hooks/counter-parent-hooks";
import { ReduxExample } from "./redux-example";
import TodoParent from "./todo-mobx/todo-parent";

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
          <ul className="flex listStyleNo header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/counter-events">Counter Events</Link>
            </li>
            <li>
              <Link to="/counter-events-observer">Counter Events Observer</Link>
            </li>

            <li>
              <Link to="/counter-hooks">Counter Hooks</Link>
            </li>

            <li>
              <Link to="/redux-example">Redux Example</Link>
            </li>

            <li>
              <Link to="/todo-mobx">todo mobx</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}

          <div className="container-column">
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
              <Route path="/counter-events-observer">
                <CounterParentObserver />
              </Route>
              <Route path="/counter-hooks">
                <CounterParentHooks />
              </Route>

              <Route path="/redux-example">
                <ReduxExample />
              </Route>

              <Route path="/todo-mobx">
                <TodoParent />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
