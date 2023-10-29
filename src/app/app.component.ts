import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo) {
      this.todoService.addTodo(new Todo(this.newTodo, false));
      this.newTodo = '';
    }
  }
}
