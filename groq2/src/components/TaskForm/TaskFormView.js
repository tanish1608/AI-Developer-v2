
import React from 'react';
import { css, cx } from 'emotion';
import styles from './TaskForm.module.css';

const TaskFormView = ({ taskName, taskDeadline, setTaskName, setTaskDeadline, toggleCreateTask, onSubmit }) => {
const handleCreateTask = (e) => {
e.preventDefault();
onSubmit();
};

return (
<form onSubmit={handleCreateTask}>
<label className={styles.label}>
Task Name:
<input
type="text"
value={taskName}
onChange={(e) => setTaskName(e.target.value)}
className={cx(styles.input, styles.textInput)}
placeholder="Task Name"
/>
</label>
<label className={styles.label}>
Deadline:
<input
type="date"
value={taskDeadline}
onChange={(e) => setTaskDeadline(e.target.value)}
className={cx(styles.input, styles.dateInput)}
/>
</label>
<button type="submit" className={styles.submitButton}>
Create Task
</button>
</form>
);
};

export default TaskFormView;