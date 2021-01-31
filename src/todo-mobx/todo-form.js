import { useState } from "react";
export const NewTodoForm = (props) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
      />

      <button onClick={props.addTodo}>Add Todo</button>
    </div>
  );
};
