import { createContext } from "react";
import type { Task } from "../types/types";

export type TaskContextType = {
	tasks: Task[];
	addTask: (title: string) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);
