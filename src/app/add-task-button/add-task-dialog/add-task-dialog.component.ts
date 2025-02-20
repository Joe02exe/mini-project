import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { TaskCategory } from 'src/app/task/task';
import { User } from 'src/app/user/user';
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MockAuthentificationService } from 'src/app/services/mock-authentification.service';



@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ReactiveFormsModule],
})
export class AddTaskDialogComponent {
  
  taskForm = new FormGroup({
    'name': new FormControl("", [
      Validators.required
    ]),
    'category': new FormControl("",[
      Validators.required
    ]),
    'assignedUser': new FormControl("",[
      Validators.required
    ]),
    'description': new FormControl("")
  });

  public taskCategory = TaskCategory;
  users: User[] = [];
  error: string = ""

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>, private taskService: TaskService, private userService : UserService, private authentificationService : MockAuthentificationService){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  addTask(): void {
    this.taskService.addTask({
      name: this.name.value,
      category: this.category.value,
      createdUser: this.authentificationService.user?.username,
      assignedUser: this.assignedUser.value,
      description: this.description.value,
      status: "open"
    }).subscribe(
      (response) => {
        this.dialogRef.close();
      },
      (error) => {
        this.error = error
      })
    }

  get name(): FormControl {
    return this.taskForm.get('name') as FormControl;
  }

  get category(): FormControl {
    return this.taskForm.get('category') as FormControl;
  }

  get assignedUser(): FormControl {
    return this.taskForm.get('assignedUser') as FormControl;
  }

  get description(): FormControl {
    return this.taskForm.get('description') as FormControl;
  }
}
