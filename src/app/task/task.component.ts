import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

import { Task } from './task';
import { TASKS } from './mockTasks';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {

  allTasks: Task [] = []
  doneTasks: Task[] = [];
  openTasks: Task[] = [];
  inProgressTasks: Task[] = [];

  selectedTask?: Task;

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
  constructor(private taskService: TaskService) {}


  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(allTasks => this.allTasks = allTasks);

    console.log(this.doneTasks.length + "  "+ this.openTasks.length+ "  "+ this.allTasks.length)
  }

}
