import { User } from "../user/user";

export interface Task {
    id: number;
    name: string;
    category: String;
    assignedUser: User;
    createdUser: User;
    description: string;
    status: "open" | "in-progress" | "done";
}

//taskdetaildialog, taskaddDialogand taskdeletedialog