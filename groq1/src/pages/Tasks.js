import React from 'react';
import TaskDetail from '../../components/TaskDetail';
import './Tasks.module.css';

function Tasks() {
return (
<div className="page-tasks">
<h1 className="page-heading">Task Details</h1>
<p className="page-description">
This is where you can view, edit, and delete tasks.
</p>
<TaskDetail />
</div>
);
}

export default Tasks;