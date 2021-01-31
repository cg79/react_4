import { observable, computed, makeObservable } from "mobx";
export class TodoModel {
  id = Math.random();
  title;
  completed = false;
  assignee = "";
  constructor(title) {
    this.title = title;
    makeObservable(this, {
      title: observable,
      completed: observable,
    });
  }
}
