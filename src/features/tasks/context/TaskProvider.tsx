import { useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../types/types";
import { mockTasks } from "../mock/mockTasks";
import { TaskContext } from "./taskContext";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<Task[]>(mockTasks);

	const addTask = (title: string) => {
		setTasks((prev) => {
			const nextId =
				prev.length > 0 ? Math.max(...prev.map((t) => t.id)) + 1 : 1;
			const newTask: Task = {
				id: nextId,
				title,
				completed: false,
			};
			return [...prev, newTask];
		});
	};

	const value = {
		tasks,
		addTask,
	};

	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
