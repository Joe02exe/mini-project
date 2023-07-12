import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { Routes } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

import { Task } from '../task/task';
import { TASKS } from '../task/mockTasks';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag]
})



export class DragDropComponent {
  doneTasks: Task[] = [];
  openTasks: Task[] = [];
  inProgressTasks: Task[] = [];

  selectedTask?: Task;

  onSelect(task: Task): void {
    this.selectedTask = task;
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.doneTasks = TASKS.filter(task => task.status == "done");
    this.openTasks = TASKS.filter(task => task.status == "open");
    this.inProgressTasks = TASKS.filter(task => task.status == "in-progress");

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
