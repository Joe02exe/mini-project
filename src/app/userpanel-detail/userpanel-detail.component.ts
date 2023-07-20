import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user/user';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueUsernameValidator } from '../uniqueUsernameValidator/unique-username-validator';
import { PasswordValidator } from '../passwordValidator/pass-word-validator';
import { AddTaskDialogComponent } from '../add-task-button/add-task-dialog/add-task-dialog.component';

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

  hidePassword = true;
  hidePasswordConfirm = true;
  error = ""

  roles = ["user", "admin"]

  form: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'firstName' : new FormControl(null,[Validators.required]),
    'lastName': new FormControl(null, [Validators.required]),
    'birthDate': new FormControl([Validators.required]),
    'password': new FormControl(null, [Validators.required]),
    'passwordConfirm': new FormControl(null, [Validators.required]),
    'role': new FormControl(null, [Validators.required])
  },{ validators: PasswordValidator.passwordsMatching},
  );

  public user?: User;

  constructor(private userService : UserService, public dialogRef: MatDialogRef<AddTaskDialogComponent>) {}

  ngOnInit(): void {
  }

  updateUser(): void {
    if (this.user){
      this.setValues()
      this.userService.updateUser(this.user).subscribe(
        (response) => {
          this.dialogRef.close();
        },
        (error) => {
          this.error = error
        })
    }
  }

  setValues() {
    if (this.user){
      this.user.email = this.email.value;
      this.user.firstName = this.firstName.value;
      this.user.lastName = this.lastName.value;
      this.user.role = this.role.value;
      this.user.birthDate = this.birthDate.value;
      this.user.password = this.password.value;
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }
  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }
  get birthDate(): FormControl {
    return this.form.get('birthDate') as FormControl;
  }
  get role(): FormControl {
    return this.form.get('role') as FormControl;
  }
}


