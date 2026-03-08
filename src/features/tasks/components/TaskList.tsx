import styles from "./TaskList.module.css";
import type { Task } from "../types/types";
import { TaskItem } from "./TaskItem";

// const [isSaving, setIsSaving] = useState(false);

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
	return (
		<div className={styles.container}>
			<ul>
				{tasks.map((task: Task) => (
					<div className={styles.item} key={task.id}>
						<TaskItem
							key={task.id}
							task={task}
							onToggle={(id: number) => {
								console.log("toggle task", id);
							}}
						/>
					</div>
				))}
			</ul>
		</div>
	);
};
