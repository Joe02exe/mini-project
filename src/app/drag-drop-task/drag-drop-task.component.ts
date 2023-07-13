import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Task } from '../task/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-drag-drop-task',
  templateUrl: './drag-drop-task.component.html',
  styleUrls: ['./drag-drop-task.component.css']
})
export class DragDropTaskComponent {

  allTasks: Task [] = []
  doneTasks: Task [] = [];
  openTasks: Task[] = []; 
  inProgressTasks: Task [] = [];

  selectedTask?: Task;

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
  constructor(private taskService: TaskService) {}


  ngOnInit(): void {
    this.getTasks();
  }

  initilializeTasks(allTasks : Task[]) : void {
    this.allTasks = allTasks
    this.openTasks = this.allTasks.filter(t => t.status === "open")
    this.inProgressTasks = this.allTasks.filter(t => t.status === "in-progress")
    this.doneTasks = this.allTasks.filter(t => t.status === "done")
  }

  getTasks(): void {
    console.log(this.allTasks.length)
    this.taskService.getTasks().subscribe(allTasks => this.initilializeTasks(allTasks));
  }  

  drop(event: CdkDragDrop<Task []>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // TODO: need to perform a put action and change the state of the todo
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.updateValues()
  }

  updateValues() {
    for (let index = 0; index < this.doneTasks.length; index++) {
      if(this.doneTasks[index].status != "done"){
        this.doneTasks[index].status = "done";
        this.selectedTask =  this.inProgressTasks[index];
        this.taskService.updateTask(this.selectedTask).subscribe()
      }
      
    }
    for (let index = 0; index < this.inProgressTasks.length; index++) {
      if(this.inProgressTasks[index].status != "in-progress"){
        this.inProgressTasks[index].status = "in-progress";
        this.selectedTask =  this.inProgressTasks[index];
        this.taskService.updateTask(this.selectedTask).subscribe()
      }
      
    }
    for (let index = 0; index < this.openTasks.length; index++) {
      if(this.openTasks[index].status != "open"){
        this.openTasks[index].status = "open";
        this.selectedTask =  this.inProgressTasks[index];
        this.taskService.updateTask(this.selectedTask).subscribe()
      }
    }
  }

  updateView(){
    this.getTasks();
  }
}


