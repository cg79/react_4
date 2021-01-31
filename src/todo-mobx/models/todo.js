import {observable, computed, makeObservable} from 'mobx';
export class TodoModel {
    id = Math.random();
    title;
    finished = false;
    constructor(title) {
      this.title = title;
      makeObservable(this,{
        title: observable,
        finished: observable,
      })
    }
  }