import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private readonly httpClient = inject(HttpClient);

  getById(id: number): Todo | undefined {
    return this.httpClient.get<Todo | undefined>(`${this.url}/${id}`);
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }
  url<T>(url: any): Observable<Todo[]> {
    throw new Error('Method not implemented.');
  }

  add(content: string): Observable<Todo> {
    const task = new Todo({ content });
    return this.httpClient.post<Todo>(this.url, task);
  }

  updateState(id: number, hasFinished: boolean): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number): void {
    throw new Error('Method not implemented.');
  }
}
