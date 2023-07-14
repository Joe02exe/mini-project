import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task/task';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
   createDb() {
        const users =[
          {id: uuidv4(), username: "john", firstName: "John", lastName: "Doe", password: "passwd", birthDate: new Date("2000-01-01"), role: "admin", email: "test@gmail.com"},
          {id: uuidv4(), username: "harry", firstName: "Harry", lastName: "Kane", password: "passwd", birthDate: new Date("1980-09-10"), role: "user", email: "test@gmail.com"},
          {id: uuidv4(), username: "raheem", firstName: "Raheem", lastName: "Sterling", password: "passwd", birthDate: new Date("1997-06-01"), role: "user", email: "test@gmail.com"},
          {id: uuidv4(), username: "mason", firstName: "Mason", lastName: "Mount", password: "passwd", birthDate: new Date("2001-04-16"), role: "admin", email: "test@gmail.com"},
        ]
        const tasks =[
          {id : uuidv4(), description: "This is the description for Task 1", assignedUser: users[0], createdUser: users[0], status: "open", name: "task1", category: "frontend"},
          {id : uuidv4(), description: "This is the description for Task 2", assignedUser: users[1], createdUser: users[0], status: "done", name: "task2", category: "other"},
          {id : uuidv4(), description: "This is the description for Task 3", assignedUser: users[2], createdUser: users[3], status: "in_progress", name: "task3", category: "db"},
          {id : uuidv4(), description: "This is the description for Task 4", assignedUser: users[0], createdUser: users[1], status: "open", name: "task4", category: "frontend"},
          {id : uuidv4(), description: "This is the description for Task 5", assignedUser: users[3], createdUser: users[1], status: "open", name: "task5", category: "db"},
          {id : uuidv4(), description: "This is the description for Task 6", assignedUser: users[0], createdUser: users[0], status: "done", name: "task6", category: "frontend"},
          {id : uuidv4(), description: "This is the description for Task 7", assignedUser: users[2], createdUser: users[2], status: "open", name: "task7", category: "db"},
          {id : uuidv4(), description: "This is the description for Task 8", assignedUser: users[1], createdUser: users[1], status: "in_progress", name: "task8", category: "backend"},
          {id : uuidv4(), description: "This is the description for Task 9", assignedUser: users[1], createdUser: users[3], status: "open", name: "task9", category: "backend"},
          {id : uuidv4(), description: "This is the description for Task 10", assignedUser: users[3], createdUser: users[1], status: "done", name: "task10", category: "frontend"},
          {id : uuidv4(), description: "This is the description for Task 11", assignedUser: users[0], createdUser: users[1], status: "in_progress", name: "task11", category: "other"},
      
        ]
      return {tasks, users}      
  }
}
