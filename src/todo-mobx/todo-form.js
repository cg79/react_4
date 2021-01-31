import { useState } from "react";
export const NewTodoForm = (props) => {

  const { handlers, todo } = props;
  const [todoText, setTodoText] = useState(todo? todo.title : '');

  const editTodo = () => {
    const newTodo = {
      ...todo,
      title: todoText
    };
    handlers.onEditTodo(newTodo);
  }


  // todo && setTodoText(todo.task);
  debugger;

  return (
    <div>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
      />

    {!todo && 
      <button onClick={() => handlers.onAddTodo(todoText)}>Add Todo</button>
    }

    {todo && 
      <button onClick={() => editTodo()}>Edit Todo</button>
    }
      
      <button onClick={() => handlers.hideToDoForm()}>Hide</button>
    </div>
  );
};
