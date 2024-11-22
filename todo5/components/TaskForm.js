import React, { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm() {
const [taskTitle, setTaskTitle] = useState('');
const [isCompleted, setIsCompleted] = useState(false);

const handleSubmit = (event) => {
event.preventDefault();
console.log(`Task Title: ${taskTitle}, Completed: ${isCompleted}`);
};

return (
<div className={styles.task_form}>
<form onSubmit={handleSubmit}>
<div className={styles.form_group}>
<label htmlFor="title">Task Title:</label>
<input
type="text"
id="title"
value={taskTitle}
onChange={(event) => setTaskTitle(event.target.value)}
required
/>
</div>
<div className={styles.form_group}>
<label>Completed</label>
<input
type="checkbox"
checked={isCompleted}
onChange={() => setIsCompleted(!isCompleted)}
/>
</div>
<button type="submit">Add Task</button>
</form>
</div>
);
}

export default TaskForm;