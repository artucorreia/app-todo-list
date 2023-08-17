import { Component } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Task[];

  constructor () { 
    this.taskList = JSON.parse(localStorage['taskList'] || '[]');
  }

  setNewTask(event: Task): void { this.taskList.push(event); }

  ngDoCheck(): void {
    this.updateLocalStorage();
    this.sortTaskList();
  }

  updateLocalStorage(): string | void {
    if (this.taskList) {
      return localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }

  sortTaskList(): Task[] {
    return this.taskList.sort((first, last) => Number(first.status) - Number(last.status));
  }

  validationInput(name: string, i: number): void {
    if (!name.length) {
      const confirm = window.confirm('Tarefa vazia, deseja deletar?');
      if(confirm) {
        this.deleteTask(i);
      }
    }
  }

  deleteTask(i: number): void { this.taskList.splice(i, 1); }

  deleteAllTasks(): Task[] {
    const confirm = window.confirm('Deseja apagar todas as terefas?');
    if (confirm) {
      return this.taskList=[];
    } else {
      return this.taskList;
    }
  }
}