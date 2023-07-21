import { Component, Input } from '@angular/core';
import { Task, TaskCategory } from '../task/task';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { User } from '../user/user';
import { UserService } from '../services/user.service';


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
  selector: './dialog/dialog-elements-example-dialog',
  templateUrl: './dialog/dialog-elements-example-dialog.html',
  styleUrls: ['./dialog/dialog-elements-example-dialog.css']
  
})
export class DialogElementsExampleDialog {
  public task?: Task;

  public taskCategory = TaskCategory;

  public states = ["open", "in_progress", "done"];


  users: User[] = [];

  constructor(private userService : UserService, private taskService : TaskService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  updateTask(): void {
    if (this.task)
      this.taskService.updateTask(this.task).subscribe()
  }
  
}
