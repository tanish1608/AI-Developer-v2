import React, { useState } from 'react';
import styles from './TaskItem.module.css';

function TaskItem({ taskTitle, isCompleted, onToggleDone, onDelete }) {
const [isMarked, setIsMarked] = useState(false);

const handleMarkDone = () => {
onToggleDone();
setIsMarked(true);
};

const handleDelete = () => {
onDelete();
};

return (
<div className={styles.task_item}>
<span className={`${styles.task_title} ${isCompleted ? styles.completed : ''}`}>
{taskTitle}
</span>
<div className={styles.button_container}>
<button type="button" onClick={handleMarkDone} className={styles.mark_done_button}>
Mark as Done
</button>
<button type="button" onClick={handleDelete} className={styles.delete_button}>
Delete
</button>
</div>
</div>
);
}

export default TaskItem;