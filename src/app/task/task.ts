import { User } from "../user/user";
import { v4 as uuidv4 } from 'uuid';


export enum TaskCategory {
    entry1 = "frontend",
    entry2 = "backend",
    entry3 = "db",
    entry4 = "other"
}

export interface Task {
    id?: string;
    name: string;
    category: TaskCategory;
    assignedUser: string;
    createdUser?: string;
    description: string;
    status: "open" | "in_progress" | "done";
}