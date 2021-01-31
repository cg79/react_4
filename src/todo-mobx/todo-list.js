import React, { useState } from "react";
import { observer } from "mobx-react";
import { TodoItem } from "./todo-item";
import { NewTodoForm } from "./todo-form";

export const TodoList = observer(({ store }) => {
  const [showToDoForm, toggleToDoForm] = useState(false);
  const [todo, setTodo] = useState(null);

  const onNewTodo = () => {
    toggleToDoForm(true);
  };

  const onAddTodo = (todo) => {
    debugger;
    store.addTodo(todo);
    toggleToDoForm(false);
  };
  const onEditTodo = (todo) => {
    debugger;
    store.editTodo(todo);
    toggleToDoForm(false);
    setTodo(null);
  };
  const hideToDoForm = () => {
    toggleToDoForm(false);
  };

  const formHandlers = {
    hideToDoForm,
    onAddTodo, 
    onEditTodo
  }

  const startEditTodoItem = (todo) => {
    setTodo(todo);
    toggleToDoForm(true);
    debugger;
  }

  const todoHandlers = {
    editTodo: startEditTodoItem
  }

  const removeCompleted = () => {
    debugger;
    store.removeCompleted();
  }

  debugger;
  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoItem todo={todo} key={idx} handlers={todoHandlers} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <button onClick={removeCompleted}>Remove Completed</button>

      {showToDoForm && <NewTodoForm handlers={formHandlers} todo={todo}></NewTodoForm>}
    </div>
  );
});
