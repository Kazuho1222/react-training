import { TaskForm } from "../features/tasks/components/TaskForm";
import { TaskList } from "../features/tasks/components/TaskList";
import styles from "./TodoPage.module.css";
import { useTasks } from "../features/tasks/context/useTasks";

export const TodoPage = () => {
	const { addTask } = useTasks();

	return (
		<div className={styles.container}>
			<div className={styles.title}>TodoPage</div>
			<TaskForm onAddTask={addTask} />
			<div className={styles.title}>タスク一覧</div>
			<TaskList />
		</div>
	);
};
