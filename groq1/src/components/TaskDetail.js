import React from 'react';
import './TaskDetail.module.css';

function TaskDetail() {
return (
<div className="task-detail">
<h1 className="task-title">Task Title</h1>
<p className="task-description">Task Description</p>
<button className="task-edit-button">Edit</button>
<button className="task-delete-button">Delete</button>
</div>
);
}

export default TaskDetail;