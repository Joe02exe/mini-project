import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../user/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userpanel-detail',
  templateUrl: './userpanel-detail.component.html',
  styleUrls: ['./userpanel-detail.component.css']
})
export class UserpanelDetailComponent {
  @Input() user?: User;
  constructor(public dialog: MatDialog) {}

  openDialog(user :User) {
    let dialogref = this.dialog.open(UserDialog);

    dialogref.componentInstance.user = user;
  }
  
}

@Component({
  selector: './userDialog/user-dialog',
  templateUrl: './userDialog/user-dialog.html',
  styleUrls: ['./userDialog/user-dialog.css']
  
})
export class UserDialog {
  public user?: User;

  constructor(private userService : UserService) {}

  ngOnInit(): void {
  }

  updateUser(): void {
    if (this.user)
      this.userService.updateUser(this.user).subscribe()
  }
}
