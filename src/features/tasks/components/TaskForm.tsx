import styles from "./TaskForm.module.css";

export const TaskForm = () => {
	return (
		<div className={styles.form}>
			<input type="text" className={styles.input} />
			<button className={styles.button}>追加</button>
		</div>
	);
};
