import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TaskProvider } from "./features/tasks/context/TaskProvider";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TaskProvider>
			<App />
		</TaskProvider>
	</StrictMode>,
);
