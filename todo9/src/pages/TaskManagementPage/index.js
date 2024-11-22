import React from 'react';
import styles from './TaskManagementPage.module.css';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import TaskFormModal from '../TaskFormModal/TaskFormModal';

const TaskManagementPage = () => {
return (
<div className={styles.container}>
<Header />
<h1>Task Management</h1>
<p>This is a page where users can view, create, edit, or delete tasks.</p>
<TaskList />
<button className={styles.createButton} onClick={() => console.log('Create new task')}>Create New Task</button>
</div>
);
};

export default TaskManagementPage;