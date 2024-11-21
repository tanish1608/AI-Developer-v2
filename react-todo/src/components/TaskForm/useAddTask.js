import { useState, useEffect } from "react";
import styles from "./useAddTask.module.css";

function useAddTask(onAddTask) {
const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
// Fetch tasks from API
fetch("/api/tasks")
.then((response) => response.json())
.then((data) => setTasks(data))
.catch((error) => setError(error));
}, []);

function addTask(task) {
setLoading(true);
onAddTask(task)
.then(() => {
setTasks([...tasks, task]);
setLoading(false);
})
.catch((error) => setError(error));
}

return { tasks, loading, error, addTask };
}

export default useAddTask;