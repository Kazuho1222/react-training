import clsx from "clsx";
import styles from "./TaskList.module.css";
import type { Task } from "../types/types";
import { TaskItem } from "./TaskItem";
import { mockTasks } from "../mock/mockTasks";

// const [isSaving, setIsSaving] = useState(false);

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
	return (
		<div className={styles.container}>
			<ul className={styles.item}>
				{mockTasks.map((task: Task) => (
					<TaskItem
						// className={clsx(styles.task, {
						// 	[styles.done]: task.completed === true,
						// 	// [styles.loading]: isSaving,
						// })}
						key={task.id}
						task={task}
						onToggle={function (id: number): void {
							throw new Error("Function not implemented.");
						}}
					/>
				))}
			</ul>
		</div>
	);
};
