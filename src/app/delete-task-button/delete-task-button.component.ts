import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Task } from '../task/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-delete-task-button',
  templateUrl: './delete-task-button.component.html',
  styleUrls: ['./delete-task-button.component.css']
})
export class DeleteTaskButtonComponent {
  @Input() task? : Task;

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(DeleteDialog, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.task = this.task;
  }
}


@Component({
  selector: 'delete-task-dialog',
  templateUrl: './dialog/delete-task-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DeleteDialog {
  task? : Task;

  constructor(public dialogRef: MatDialogRef<DeleteDialog>, private taskService : TaskService) {}

  deleteTask() {
    if(this.task){
      this.taskService.deleteTask(this.task).subscribe();
      this.task = undefined;
    }
  }
}

