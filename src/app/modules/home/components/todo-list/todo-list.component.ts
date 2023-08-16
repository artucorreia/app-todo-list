import { Component, Input } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Task[];

  constructor () { 
    this.taskList = [];
  }

  setNewTask(event: Task): void {
    this.taskList.push(event);
  }

  deleteTask(i: number): void {
    this.taskList.splice(i, 1);
    // console.log(this.taskList)
  }
}