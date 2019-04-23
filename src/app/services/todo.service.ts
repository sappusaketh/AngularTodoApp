import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';


const Httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
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

  // AddTodo

  addTodo(todo: Todo): Observable<Todo>{
    const Url = `${this.todosUrl}`;
    return this.http.post<Todo>(Url, todo, Httpoptions);
  }

  // DeleteTodo

  deleteTodo(todo: Todo): Observable<any> {
    const Url = `${this.todosUrl}${todo.id}`;
    return this.http.delete(Url, Httpoptions);
  }
  // toggleTodo

  toggleTodo(todo: Todo): Observable<any> {
    const Url = `${this.todosUrl}${todo.id}`;
    return this.http.put(Url, todo, Httpoptions) ;
  }
}
