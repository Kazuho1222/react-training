import { TaskForm } from "../features/tasks/TaskForm";
import { TaskList } from "../features/tasks/TaskList";
import styles from "./TodoPage.module.css";

export const TodoPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>TodoPage</div>
			<TaskForm />
			<div className={styles.title}>タスク一覧</div>
			<TaskList tasks={[]} />
		</div>
	);
};
