import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [{
      id : 1,
      title: 'Todo One',
      completed: true
    },
    {
      id: 2,
      title: 'brush 2',
      completed: false
    }, {
      id: 3,
      title: 'brush 3',
      completed: true
    } ];
  }

}
