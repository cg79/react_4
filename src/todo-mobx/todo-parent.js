import React from "react";

import { TodoList } from "./todo-list";
import { ObservableTodoStore } from "./models/todo-store";

const store = new ObservableTodoStore();
export default class TodoParent extends React.Component {
  state = {
    inc: 0,
  };
  onCounterZeroClick = (value) => {
    debugger;
    this.setState({ inc: value });
  };

  render() {
    return (
      <div>
        <TodoList store={store} />
      </div>
    );
  }
}
