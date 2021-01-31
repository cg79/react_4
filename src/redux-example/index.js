import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Boot from "./routes/boot.component";
import MainPage from "./routes/main-page.component";
import  UserEditContainer  from "./components/user/user-edit/user-edit.container";
import CounterContainer from './counter/counter.container';

import userReducer from "./components/user/reducer/user-reducer";
import counterReducer from './counter/counter-reducer';
const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
};

const middleware = applyMiddleware(thunk, logger);

const reducers = combineReducers({
  userReducer,
  counterReducer
});

const store = createStore(reducers, middleware);

export const ReduxExample = function() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Redux Example</h2>
      <ul className="flex listStyleNo header">
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>

        <li>
          <Link to={`${url}/example`}>Redux Example</Link>
        </li>
        <li>
          <Link to={`${url}/counter`}>Counter</Link>
        </li>
      </ul>

      <Provider store={store}>
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

          <Route path={`${path}/counter`}>
            <CounterContainer></CounterContainer>
          </Route>

          <Route path={`${path}/users/:userId`}>
              <UserEditContainer></UserEditContainer>
          </Route>
        </Switch>
      </Provider>
    </div>
  );
};
