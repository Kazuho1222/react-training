import { useTasks } from "../context/useTasks";
import type { Task } from "../types/types";
import styles from "./TaskItem.module.css";

type Props = {
	task: Task;
};

export const TaskItem = ({ task }: Props) => {
	const { toggleTask } = useTasks();

	return (
		<div className={styles.item}>
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => toggleTask(task.id)}
			/>
			<span
				className={`${styles.title} ${task.completed ? styles.completed : ""}`}
			>
				{task.title}
			</span>
		</div>
	);
};
