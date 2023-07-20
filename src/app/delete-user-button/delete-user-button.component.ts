import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Task } from '../task/task';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-delete-user-button',
  templateUrl: './delete-user-button.component.html',
  styleUrls: ['./delete-user-button.component.css']
})
export class DeleteUserButtonComponent {
  @Input() user? : User;

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(DeleteDialog, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.user = this.user;
  }
}


@Component({
  selector: 'delete-user-dialog',
  templateUrl: './dialog/delete-user-dialog.component.html',

})
export class DeleteDialog {
  user? : User;
  error = false

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => tasks.filter(t => {
      if (t.assignedUser == this.user?.username){
          this.error = true;
      }
    })
  )}

  constructor(public dialogRef: MatDialogRef<DeleteDialog>, private userService : UserService, private taskService : TaskService) {}

  deleteUser() {
    console.log(this.user)
    if(this.user){
      this.userService.deleteUser(this.user).subscribe();
      this.user = undefined;
    }
  }
}

