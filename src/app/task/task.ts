import { User } from "../user/user";

export enum TaskCategory {
    entry1 = "frontend",
    entry2 = "backend",
    entry3 = "db",
    entry4 = "other"
}

export interface Task {
    id: number;
    name: string;
    category: TaskCategory;
    assignedUser: User;
    createdUser: User;
    description: string;
    status: "open" | "in-progress" | "done";
}

//taskdetaildialog, taskaddDialogand taskdeletedialog