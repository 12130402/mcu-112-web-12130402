import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Todo[] = [];

  getById(id: number): Observable<Todo | undefined >{
    console.log('Task Service - getById');
    return of (this.tasks.find((task) => task.id === id));
  }

  getAll(content: string | nullp): Observable<Todo[]>{
    console.log('Task Service - getAll');
    return of (this.tasks);
  }

  add(content: string): void {
    console.log('Task Service - add');
    const id =
      this.tasks.length === 0
        ? 1
        : Math.max(...this.tasks.map((task) => task.id)) + 1;
    const task = new Todo({ id, content });
    this.tasks.push(task);
    retuen of(task);
  }

  updateState({id}: Todo, hasFinished: boolean): void {
    console.log('Task Service - updateState');
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].hasFinished = hasFinished;
    this.tasks[index].finishDate = hasFinished ? new Date() : undefined;
    return of(this.tasks[index]);
  }

  remove(id: number): void {
    console.log('Task Service - remove');
    const index = this.tasks.findIndex((task) => task.id === id);
    const task = this.tasks.splice(index, 1);
    retuen of(task[0]);
  }
}
