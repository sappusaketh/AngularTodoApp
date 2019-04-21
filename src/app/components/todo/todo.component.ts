import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
