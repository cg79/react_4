import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import Boot from "./routes/boot.component";
import MainPage from "./routes/main-page.component";

export const Topics = function Topics() {
  
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/about`}>
            About
          </Link>
        </li>
       
        <li>
          <Link to={`${url}/example`}>Redux Example</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/about`}>
          <div>
            <h2> Route used to show the redux example</h2>
          </div>
        </Route>

        <Route path={`${path}/example`}>
          <MainPage></MainPage>
        </Route>
      </Switch>
    </div>
  );
};
