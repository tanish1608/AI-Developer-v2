import React from 'react';
import TaskList from '../TaskList';
import FilterTasks from '../FilterTasks';
import styles from './index.module.css';

const IndexPage = () => {
return (
<div className={styles.index}>
<h1>Main Task List</h1>
<FilterTasks />
<TaskList />
</div>
);
};

export default IndexPage;