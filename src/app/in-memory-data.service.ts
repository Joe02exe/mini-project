import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
   createDb() {
      const users =[
        { username: "john", firstName: "John", lastName: "Doe", password: "passwd", birthDate: new Date("2000-01-01"), role: "admin"},
        { username: "harry", firstName: "Harry", lastName: "Kane", password: "passwd", birthDate: new Date("1980-09-10"), role: "user"},
        { username: "raheem", firstName: "Raheem", lastName: "Sterling", password: "passwd", birthDate: new Date("1997-06-01"), role: "user"},
        { username: "mason", firstName: "Mason", lastName: "Mount", password: "passwd", birthDate: new Date("2001-04-16"), role: "admin"},
      ]
      const tasks =[
        {id : 1, description: "This is the description for Task 1", assignedUser: users[0], createdUser: users[0], status: "open", name: "task1", category: "frontend"},
        {id : 2, description: "This is the description for Task 2", assignedUser: users[1], createdUser: users[0], status: "done", name: "task2", category: "other"},
        {id : 3, description: "This is the description for Task 3", assignedUser: users[2], createdUser: users[3], status: "in-progress", name: "task3", category: "db"},
        {id : 4, description: "This is the description for Task 4", assignedUser: users[0], createdUser: users[1], status: "open", name: "task4", category: "frontend"},
        {id : 5, description: "This is the description for Task 5", assignedUser: users[3], createdUser: users[1], status: "open", name: "task5", category: "db"},
        {id : 6, description: "This is the description for Task 6", assignedUser: users[0], createdUser: users[0], status: "done", name: "task6", category: "frontend"},
        {id : 7, description: "This is the description for Task 7", assignedUser: users[2], createdUser: users[2], status: "open", name: "task7", category: "db"},
        {id : 8, description: "This is the description for Task 8", assignedUser: users[1], createdUser: users[1], status: "in-progress", name: "task8", category: "backend"},
        {id : 9, description: "This is the description for Task 9", assignedUser: users[1], createdUser: users[3], status: "open", name: "task9", category: "backend"},
        {id : 10, description: "This is the description for Task 10", assignedUser: users[3], createdUser: users[1], status: "done", name: "task10", category: "frontend"},
        {id : 11, description: "This is the description for Task 11", assignedUser: users[0], createdUser: users[1], status: "in-progress", name: "task11", category: "other"},
    
      ]
      return {tasks, users}      
  }

  genId<T extends Task>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}
