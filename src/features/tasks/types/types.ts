// ① Task 型
export type Task = {
	id: number;
	title: string;
	completed: boolean;
};

// ② Action 型（Reducer用）
export type TaskAction =
	| { type: "ADD_TASK"; payload: string }
	| { type: "TOGGLE_TASK"; payload: number }
	| { type: "DELETE_TASK"; payload: number };

// ③ State 型
export type TaskState = {
	tasks: Task[];
};

// ④ Context 型
export type TaskContextType = {
	state: TaskState;
	dispatch: React.Dispatch<TaskAction>;
};
