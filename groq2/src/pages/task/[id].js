import React from 'react';
import TaskDetails from '../TaskDetails';
import styles from './task.module.css';

const TaskDetailsPage = () => {
return (
<div className={styles.taskDetails}>
<h1>Task Details</h1>
<TaskDetails />
</div>
);
};

export default TaskDetailsPage;