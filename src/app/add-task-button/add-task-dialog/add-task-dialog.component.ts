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
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/task/task';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class AddTaskDialogComponent {
  //default values for a task
  id: string = uuidv4();
  name: string = "";
  category: TaskCategory = TaskCategory.entry4;
  assignedUser?: User;
  createdUser?: User =         { username: "john", firstName: "John", lastName: "Doe", password: "passwd", birthDate: new Date("2000-01-01"), role: "admin"};
  description: string = "";
  status: Task["status"] = "open"

  public taskCategory = TaskCategory;


  users: User[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>, private taskService: TaskService, private userService : UserService){}

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
    console.log("in here")
    if (this.createdUser && this.assignedUser){
      let task: Task = {
        id: this.id,
        name: this.name,
        category: this.category,
        assignedUser: this.assignedUser,
        createdUser: this.createdUser,
        status: this.status, description:
        this.description
      };
      this.taskService.addTask(task)
      console.log("new task created")
      this.dialogRef.close();
    }
    
  }
    
}
