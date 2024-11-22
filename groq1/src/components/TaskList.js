import React from 'react';
import './TaskList.module.css';

function TaskList() {
return (
<ul className="task-list">
{tasks.map((task) => (
<li key={task.id}>
<p className="task-title">{task.title}</p>
<p className="task-description">{task.description}</p>
</li>
))}
</ul>
);
}

export default TaskList;