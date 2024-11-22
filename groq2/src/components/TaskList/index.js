
import React, { useState, useEffect } from 'react';
import TaskListRow from './TaskListRow';
import TaskApi from '../TaskApi';
import styles from './TaskList.module.css';

const TaskList = () => {
const [tasks, setTasks] = useState([]);
const [filter, setFilter] = useState('');

useEffect(() => {
const fetchTasks = async () => {
const response = await TaskApi.getTasks();
setTasks(response);
};

fetchTasks();
}, []);

const handleFilterChange = (e) => {
setFilter(e.target.value);
};

const filteredTasks = tasks.filter((task) => {
if (filter === '') return true;
if (task.completed && filter === 'completed') return true;
if (!task.completed && filter === 'active') return true;
return false;
});

return (
<div>
<h2>Task List</h2>
<input
type="text"
value={filter}
onChange={handleFilterChange}
placeholder="Filter tasks"
className={styles.filterInput}
/>
<ul className={styles.taskList}>
{filteredTasks.map((task) => (
<TaskListRow
key={task.id}
task={task}
handleCompleted={(completed) =>
TaskApi.updateTask({ id: task.id, completed })
}
handleDelete={() =>
TaskApi.deleteTask({ id: task.id, completed: task.completed })
}
/>
))}
</ul>
</div>
);
};

export default TaskList;