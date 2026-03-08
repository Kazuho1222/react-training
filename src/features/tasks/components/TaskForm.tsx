import { useState } from "react";
import styles from "./TaskForm.module.css";

export const TaskForm = ({
	onAddTask,
}: {
	onAddTask: (taskTitle: string) => void;
}) => {
	const [taskTitle, setTaskTitle] = useState<string>("");

	const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(e.target.value);
	};

	// React19で型を簡略化
	// 必要な型だけ定義
	const handleAddTask = (e: { preventDefault(): void }) => {
		e.preventDefault();
		// バリデーション
		if (!taskTitle.trim()) return;
		onAddTask(taskTitle.trim());
		setTaskTitle("");
	};

	return (
		<form className={styles.form} onSubmit={handleAddTask}>
			<input
				type="text"
				// 空入力防止
				required
				className={styles.input}
				value={taskTitle}
				onChange={handleChangeTaskTitle}
				placeholder="タスクを入力"
			/>
			<button type="submit" className={styles.button}>
				追加
			</button>
		</form>
	);
};
