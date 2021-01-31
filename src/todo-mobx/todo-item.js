import React from "react";
import { observer } from "mobx-react";

export const TodoItem = observer(({todo, handlers}) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  }

  const onRename = () => {
    todo.task = prompt('Task name', todo.task) || todo.task;
  }

  return (
    <li onDoubleClick={ onRename }>
      <input
        type='checkbox'
        checked={ todo.completed }
        onChange={ onToggleCompleted }
      />
      { todo.title }
      { todo.assignee
        ? <small>{ todo.assignee.name }</small>
        : null
      }
      <button onClick={() => handlers.editTodo(todo)}>Edit</button>
    </li>
  );
})