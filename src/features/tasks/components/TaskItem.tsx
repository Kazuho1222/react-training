import type { Task } from "../types/types";
import styles from "./TaskItem.module.css";

type Props = {
	task: Task;
	onToggle: (id: number) => void;
};

export const TaskItem = ({ task, onToggle }: Props) => {
	return (
		<li>
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => onToggle(task.id)}
			/>
			<span
				className={`${styles.title} ${task.completed ? styles.completed : ""}`}
			>
				{task.title}
			</span>
		</li>
	);
};
