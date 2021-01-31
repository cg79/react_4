import React, {useState}  from "react";
import { observer } from "mobx-react";
import { TodoItem } from "./todo-item";
import { NewTodoForm } from "./todo-form";

export const TodoList = observer(({ store }) => {

  const [showToDoForm, toggleToDoForm] = useState(false);

  const onNewTodo = () => {
    //store.addTodo(prompt("Enter a new todo:", "coffee plz"));
    toggleToDoForm(showToDoForm? false: true);
  };

  const onAddTodo = (todo) => {
    debugger;
    store.addTodo(todo);
  }

  debugger;
  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoItem todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
      <button onClick={onNewTodo}>New Todo</button>

      {showToDoForm && 
        <NewTodoForm addTodo={onAddTodo}></NewTodoForm>
      }
    </div>
  );
});
