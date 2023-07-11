import { Task } from "./task";
import { USERS } from "../user/mockUser";

export const TASKS: Task[] = [
    {id : 1, description: "This is the description for Task 1", assignedUser: USERS[0], createdUser: USERS[0], status: "open", name: "task1", category: "category 1"},
    {id : 2, description: "This is the description for Task 2", assignedUser: USERS[1], createdUser: USERS[0], status: "done", name: "task2", category: "category 12"},
    {id : 3, description: "This is the description for Task 3", assignedUser: USERS[2], createdUser: USERS[3], status: "in-progress", name: "task3", category: "category 2"},
    {id : 4, description: "This is the description for Task 4", assignedUser: USERS[0], createdUser: USERS[1], status: "open", name: "task4", category: "category 19"},
    {id : 5, description: "This is the description for Task 5", assignedUser: USERS[3], createdUser: USERS[1], status: "open", name: "task5", category: "category 11"},
    {id : 6, description: "This is the description for Task 6", assignedUser: USERS[0], createdUser: USERS[0], status: "done", name: "task6", category: "category 7"},
    {id : 7, description: "This is the description for Task 7", assignedUser: USERS[2], createdUser: USERS[2], status: "open", name: "task7", category: "category 1"},
    {id : 8, description: "This is the description for Task 8", assignedUser: USERS[1], createdUser: USERS[1], status: "in-progress", name: "task8", category: "category 1"},
    {id : 9, description: "This is the description for Task 9", assignedUser: USERS[1], createdUser: USERS[3], status: "open", name: "task9", category: "category 21"},
    {id : 10, description: "This is the description for Task 10", assignedUser: USERS[3], createdUser: USERS[1], status: "done", name: "task10", category: "category 4"},
    {id : 11, description: "This is the description for Task 11", assignedUser: USERS[0], createdUser: USERS[1], status: "in-progress", name: "task11", category: "category 6"},

  ];