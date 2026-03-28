import styles from "./TaskList.module.css";
import type { Task } from "../types/types";
import { TaskItem } from "./TaskItem";
import { useTasks } from "../context/useTasks";

// const [isSaving, setIsSaving] = useState(false);

export const TaskList = () => {
	const { tasks } = useTasks();
	return tasks.length > 0 ? (
		<div className={styles.container}>
			<ul>
				{tasks.map((task: Task) => (
					<li className={styles.item} key={task.id}>
						<TaskItem task={task} />
					</li>
				))}
			</ul>
		</div>
	) : (
		<div className={styles.emptyMessage}>タスクがありません。</div>
	);
};
