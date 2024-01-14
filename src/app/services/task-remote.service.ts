import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private readonly httpClient = inject(HttpClient);

  getById(id: number): Todo | undefined {
    console.log('Task Remote Service - getById');
    return this.httpClient.get<Todo | undefined>(`${this.url}/${id}`);
  }

  getAll(content: string | null): Observable<Todo[]> {
    console.log('Task Remote Service - getAll');
    const url = content ? `${this.url}?content_like=${content}` : this.url;
    return this.httpClient.get<Todo[]>(url);
  }

  add(task: Todo): Observable<Todo> {
    console.log('Task Remote Service - add', task);
    return this.httpClient.post<Todo>(this.url, task);
  }

  updateState({ id: content }: Todo, hasFinished: boolean): Observable<Todo> {
    console.log('Task Remote Service - updateState');
    const task = new Todo({ content, hasFinished });
    return this.httpClient.put<Todo>(`${this.url}/${id}`, task);
  }

  remove(id: number): Observable<Todo> {
    console.log('Task Remote Service - remove');
    return this.httpClient.delete<Todo>(`${this.url}/${id}`);
  }
}
