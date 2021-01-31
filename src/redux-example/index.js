import React from "react";
import "./index.css";
import Boot from "./routes/boot.component";
import MainPage from "./routes/main-page.component";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

import userReducer from "./components/user/reducer/user-reducer";

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
};

const middleware = applyMiddleware(thunk, logger);

const reducers = combineReducers({
  userReducer,
});

const store = createStore(reducers, middleware);

//https://reactrouter.com/web/example/nesting

export const ReduxExample = function () {
  //   path = "";
  //   url = "";
  //   constructor(props) {
  //     super(props);
  //     let { path, url } = useRouteMatch();
  //     this.path = path;
  //     this.url = url;
  //   }

  let { path, url } = useRouteMatch();

  return (
    <Provider store={store}>
      <div>
		  
        {/* <div>
		<Switch>
		  <Route path="/redux-example/start" component={Boot} />
          <Route path="/redux-example/home" component={MainPage} />
		  </Switch>
        </div>
		<div> */}
        <ul>
          <li>
            <Link to={`${url}/start`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/home`}>Components</Link>
          </li>
        </ul>

        {/* <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
			<Boot></Boot>
          </Route>
          <Route path={`${path}/:topicId`}>
            <MainPage></MainPage>
          </Route>
        </Switch> */}
      </div>
    </Provider>
  );
};
