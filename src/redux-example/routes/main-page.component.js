import React, { Component } from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import HeaderContainer from "../components/header/header.container";
import HomeContainer from "../components/home/home.container";

import userReducer from "../components/user/reducer/user-reducer";
const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
};

const middleware = applyMiddleware(thunk, logger);

const reducers = combineReducers({
  userReducer,
});

const store = createStore(reducers, middleware);
export default class MainPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <span> Main Page</span>
          <HeaderContainer />
          <HomeContainer />
        </div>
      </Provider>
    );
  }
}
