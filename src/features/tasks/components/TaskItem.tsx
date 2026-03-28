import { useState, useRef, useEffect } from "react";
import { useTasks } from "../context/useTasks";
import type { Task } from "../types/types";
import styles from "./TaskItem.module.css";

type Props = {
	task: Task;
};

export const TaskItem = ({ task }: Props) => {
	const { toggleTask, deleteTask, editTask } = useTasks();
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(task.title);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isEditing) {
			inputRef.current?.focus();
		}
	}, [isEditing]);

	const handleToggle = () => {
		toggleTask(task.id);
	};

	const handleDelete = () => {
		deleteTask(task.id);
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		if (editText.trim() !== "") {
			editTask(task.id, editText);
			setIsEditing(false);
		}
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditText(task.title);
	};

	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<input
					type="checkbox"
					checked={task.completed}
					onChange={handleToggle}
				/>
				{isEditing ? (
					<input
						ref={inputRef}
						type="text"
						value={editText}
						onChange={(e) => setEditText(e.target.value)}
						className={styles.title}
					/>
				) : (
					<span
						className={`${styles.title} ${task.completed ? styles.completed : ""}`}
					>
						{task.title}
					</span>
				)}
			</div>
			<div className={styles.actions}>
				{isEditing ? (
					<>
						<button type="button" onClick={handleSave}>
							保存
						</button>
						<button type="button" onClick={handleCancel}>
							キャンセル
						</button>
					</>
				) : (
					<>
						<button type="button" onClick={handleEdit}>
							編集
						</button>
						<button type="button" onClick={handleDelete}>
							削除
						</button>
					</>
				)}
			</div>
		</div>
	);
};
