import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos/';
  todosLimit = '?_limit=5';
  constructor(private http: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]> (`${this.todosUrl}${this.todosLimit}`);
  }
}
