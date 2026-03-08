import { useState } from "react";
import { TaskForm } from "../features/tasks/components/TaskForm";
import { TaskList } from "../features/tasks/components/TaskList";
import { mockTasks } from "../features/tasks/mock/mockTasks";
import type { Task } from "../features/tasks/types/types";
import styles from "./TodoPage.module.css";

export const TodoPage = () => {
	const [tasks, setTasks] = useState<Task[]>(mockTasks);

	const handleAddTask = (title: string) => {
		const nextId =
			tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
		const newTask: Task = {
			id: nextId,
			title,
			completed: false,
		};
		setTasks((prev) => [...prev, newTask]);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>TodoPage</div>
			<TaskForm onAddTask={handleAddTask} />
			<div className={styles.title}>タスク一覧</div>
			<TaskList tasks={tasks} />
		</div>
	);
};
