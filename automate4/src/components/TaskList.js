import React, { useState, useEffect } from 'react';

function TaskList({ tasks = [], onToggleCompletion = () => {}, onFilterTasks = () => {} }) {
const [filteredTasks, setFilteredTasks] = useState(tasks);
const [filterStatus, setFilterStatus] = useState('all');

useEffect(() => {
setFilteredTasks(tasks);
}, [tasks]);

const handleToggleCompletion = (taskId) => {
const updatedTasks = tasks.map((task) => {
if (task.id === taskId) {
return { ...task, completed: !task.completed };
}
return task;
});
onToggleCompletion(updatedTasks);
};

const handleFilterTasks = (status) => {
setFilterStatus(status);
const filteredTasks = tasks.filter((task) => task.completed === status);
setFilteredTasks(filteredTasks);
};

// Inline CSS styles
const containerStyle = {
listStyle: "none",
padding: 0,
margin: 0,
};

const taskStyle = {
padding: "10px",
borderBottom: "1px solid #ccc",
};

const completedTaskStyle = {
textDecoration: "line-through",
};

const filterButtonStyle = {
padding: "10px 20px",
fontSize: "16px",
fontWeight: "bold",
color: "#fff",
backgroundColor: "#007bff",
border: "none",
borderRadius: "5px",
cursor: "pointer",
transition: "background-color 0.3s ease",
};

const filterButtonHoverStyle = {
backgroundColor: "#0056b3",
};

const filterButtonActiveStyle = {
backgroundColor: "#0056b3",
};

return (
<div>
<ul style={containerStyle}>
{filteredTasks.map((task) => (
<li key={task.id} style={taskStyle}>
<input
type="checkbox"
checked={task.completed}
onChange={() => handleToggleCompletion(task.id)}
/>
<span style={task.completed ? completedTaskStyle : {}}>{task.name}</span>
</li>
))}
</ul>
<div>
<button
style={{
...filterButtonStyle,
...(filterStatus === 'all' ? filterButtonActiveStyle : {}),
":hover": filterButtonHoverStyle
}}
onClick={() => handleFilterTasks('all')}
>
All
</button>
<button
style={{
...filterButtonStyle,
...(filterStatus === 'completed' ? filterButtonActiveStyle : {}),
":hover": filterButtonHoverStyle
}}
onClick={() => handleFilterTasks('completed')}
>
Completed
</button>
<button
style={{
...filterButtonStyle,
...(filterStatus === 'pending' ? filterButtonActiveStyle : {}),
":hover": filterButtonHoverStyle
}}
onClick={() => handleFilterTasks('pending')}
>
Pending
</button>
</div>
</div>
);
}

export default TaskList;