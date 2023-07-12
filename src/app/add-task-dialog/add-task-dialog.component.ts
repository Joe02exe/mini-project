import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent {

  

  constructor (private taskService: TaskService) {}
  
  add(task: Task): void {
    if (!task) { return; }
    this.taskService.addTask(task)
  }
}
