import { observable, computed, action, autorun, makeObservable } from "mobx";
import { TodoModel } from "./todo";

export class ObservableTodoStore {
  todos = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
      editTodo: action,
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return "<none>";
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    const todo = new TodoModel(task);
    this.todos.push(todo);
  }
  editTodo(todo) {
    debugger;
    const index = this.todos.findIndex((el) => el.id === todo.id);
    if (index < 0) {
      return;
    }
    this.todos[index] = todo;
  }

  removeCompleted() {
    this.todos = this.todos.filter(el => el.completed !== true);
  } 


}
