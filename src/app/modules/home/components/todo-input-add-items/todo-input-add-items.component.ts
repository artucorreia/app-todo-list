import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  @Output() public exportNewTask = new EventEmitter<Task>();
  public newTaskName = '';
  
  constructor() {}

  exportTask(event: KeyboardEvent): void {
    if(event.key == 'Enter') {
      this.exportNewTask.emit({name: this.newTaskName, status: false});
      this.clearNewTaskName();
    }
  }

  clearNewTaskName(): string { return this.newTaskName = ''; }
}
