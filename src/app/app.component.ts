import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor() {
    this.changeTitle('DODO');
  }

  changeTitle(name: string) {
    this.title = name;
  }
}
