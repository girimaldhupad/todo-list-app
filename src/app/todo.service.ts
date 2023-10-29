import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  updateTodoStatus(index: number, status: boolean) {
    this.todos[index].status = status;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
