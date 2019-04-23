import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor( private todoService: TodoService) { }

  ngOnInit() { }
  setClasses() {
    const classes = {
      todo : true,
      'is-complete' : this.todo.completed
    };
    return classes;
  }

  onChange(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleTodo(todo).subscribe( todo => console.log(todo));

  }
  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }
}
