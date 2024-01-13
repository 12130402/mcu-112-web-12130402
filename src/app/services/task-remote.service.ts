import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private readonly httpClient = inject(HttpClient);

  getById(id: number): Todo | undefined {
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }

  add(content: string): void {
    throw new Error('Method not implemented.');
  }

  updateState(id: number, hasFinished: boolean): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number): void {
    throw new Error('Method not implemented.');
  }
}
