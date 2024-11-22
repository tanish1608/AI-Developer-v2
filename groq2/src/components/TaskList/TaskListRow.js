
import React from 'react';
import styles from './TaskListRow.module.css';

const TaskListRow = ({ task, handleCompleted, handleDelete }) => {
const handleCompletedClick = () => {
handleCompleted(!task.completed);
};

return (
<li className={styles.taskRow}>
<input
type="checkbox"
checked={task.completed}
onClick={handleCompletedClick}
className={styles.checkBox}
/>
<span className={styles.taskName}>{task.name}</span>
<a className={styles.link} href={`/task/${task.id}`}>
View details
</a>
<button className={styles.deleteButton} onClick={handleDelete}>
Delete
</button>
</li>
);
};

export default TaskListRow;