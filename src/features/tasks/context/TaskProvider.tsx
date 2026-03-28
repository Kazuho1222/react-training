import type { ReactNode } from "react";
import { useReducer } from "react";
import { mockTasks } from "../mock/mockTasks";
import { taskReducer } from "../taskReducer";
import type { Task } from "../types/types";
import { TaskContext } from "./taskContext";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, dispatch] = useReducer(taskReducer, mockTasks);

	const addTask = (title: string) => {
		const nextId =
			tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
		const newTask: Task = {
			id: nextId,
			title,
			completed: false,
		};
		dispatch({ type: "ADD_TASK", payload: newTask });
	};

	const deleteTask = (id: number) => {
		dispatch({ type: "DELETE_TASK", payload: id });
	};

	const toggleTask = (id: number) => {
		dispatch({ type: "TOGGLE_TASK", payload: id });
	};

	const editTask = (id: number, title: string) => {
		dispatch({ type: "EDIT_TASK", payload: { id, title } });
	};

	const value = {
		tasks,
		addTask,
		toggleTask,
		editTask,
		deleteTask,
	};

	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
