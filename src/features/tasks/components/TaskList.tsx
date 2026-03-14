import styles from "./TaskList.module.css";
import type { Task } from "../types/types";
import { TaskItem } from "./TaskItem";
import { useTasks } from "../context/useTasks";

// const [isSaving, setIsSaving] = useState(false);

export const TaskList = () => {
	const { tasks } = useTasks();
	return (
		<div className={styles.container}>
			<ul>
				{tasks.map((task: Task) => (
					<div className={styles.item} key={task.id}>
						<TaskItem key={task.id} task={task} />
					</div>
				))}
			</ul>
		</div>
	);
};
