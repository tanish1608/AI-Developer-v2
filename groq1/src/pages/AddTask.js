import React from 'react';
import TaskForm from '../../components/TaskForm';
import './AddTask.module.css';

function AddTask() {
return (
<div className="page-add-task">
<h1 className="page-heading">Add New Task</h1>
<p className="page-description">
This is where you can add new tasks.
</p>
<TaskForm />
</div>
);
}

export default AddTask;