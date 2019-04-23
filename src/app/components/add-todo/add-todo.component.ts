import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() { }
  title: string;
  ngOnInit() {
  }
  onSubmit() {
    if (this.title === undefined || '') {
      return alert(`cannot add ${this.title} to the list `);
    } else {
      const todo = {
        title: this.title,
        completed: false
      } ;
      this.addTodo.emit(todo);
      this.title = undefined;
    }
  }
}
