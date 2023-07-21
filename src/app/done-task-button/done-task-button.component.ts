import { Component, Input } from '@angular/core';
import { Task } from '../task/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-done-task-button',
  templateUrl: './done-task-button.component.html',
  styleUrls: ['./done-task-button.component.css']
})
export class DoneTaskButtonComponent {
  @Input() task? : Task;

  constructor (private taskService : TaskService){}

  markDone() {
    if(this.task) {
      this.task.status = "done"
      this.taskService.updateTask(this.task).subscribe()
    }
  }
}
