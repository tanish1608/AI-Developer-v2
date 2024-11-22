import React, { useState, useEffect } from 'react';
import styles from './TaskList.module.css';

const TaskList = () => {
const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchTasks = async () => {
try {
const response = await fetch('https://api.example.com/tasks');
const data = await response.json();
setTasks(data.tasks);
setLoading(false);
} catch (err) {
setError(err.message);
setLoading(false);
}
};
fetchTasks();
}, []);

return (
<div className={styles.taskList}>
{loading ? (
<p>Loading tasks...</p>
) : error ? (
<p>Error: {error}</p>
) : (
tasks.map((task) => (
<div key={task.id} className={styles.task}>
<h2>{task.title}</h2>
<p>{task.description}</p>
</div>
))
)}
</div>
);
};

export default TaskList;