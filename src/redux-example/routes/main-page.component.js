import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import HeaderContainer from "../components/header/header.container";
import HomeContainer from "../components/home/home.container";

export default class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <span> Main Page</span>
        <HeaderContainer />
        <HomeContainer />

        <Switch>
          <Route exact path="/">
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`/users`}>
            <div>
              <h2> Route used to show the redux example</h2>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}
