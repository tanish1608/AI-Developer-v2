import React from 'react';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import './Home.module.css';

function Home() {
return (
<div className="page-home">
<h1 className="page-heading">Task List</h1>
<p className="page-description">
This is the main list of tasks. You can filter and manage tasks from here.
</p>
<TaskFilter />
<TaskList />
</div>
);
}

export default Home;