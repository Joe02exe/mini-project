import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
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
  }

}
