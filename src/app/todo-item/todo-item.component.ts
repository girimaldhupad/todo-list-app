import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() index!: number;

  constructor(private todoService: TodoService) {}

  updateStatus(index: number) {
    this.todoService.updateTodoStatus(index, this.todo.status);
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }
}
