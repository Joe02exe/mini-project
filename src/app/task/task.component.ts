import { Component, Input } from '@angular/core';
import { Task } from '../task/task';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task?: Task;
  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  openDialog(task: Task) {
    let dialogref = this.dialog.open(DialogElementsExampleDialog);

    dialogref.componentInstance.task = task;
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['./dialog-elements-example-dialog.css']
  
})
export class DialogElementsExampleDialog {
  public task?: Task;

  
}
