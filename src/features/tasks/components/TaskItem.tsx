import { useTasks } from "../context/useTasks";
import type { Task } from "../types/types";
import styles from "./TaskItem.module.css";

type Props = {
	task: Task;
};

export const TaskItem = ({ task }: Props) => {
	const { toggleTask } = useTasks();

	const handleToggle = () => {
		toggleTask(task.id);
	};

	return (
		<div className={styles.item}>
			<input type="checkbox" checked={task.completed} onChange={handleToggle} />
			<span
				className={`${styles.title} ${task.completed ? styles.completed : ""}`}
			>
				{task.title}
			</span>
		</div>
	);
};
