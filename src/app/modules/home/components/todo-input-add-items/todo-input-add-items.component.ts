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
    if((event.key == 'Enter') && (this.verifyTaskName())) {
      this.exportNewTask.emit(
        {
          name: this.newTaskName.trim(), 
          status: false
        }
      );
      this.clearNewTaskName();
    }
  }

  verifyTaskName(): boolean {
    if (this.newTaskName !== '') {
      return true;
    }
    return false;
  }

  clearNewTaskName(): string { return this.newTaskName = ''; }
}
