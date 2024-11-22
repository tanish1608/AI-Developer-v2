import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskDetails = ({ task }) => {
const [name, setName] = useState(task.name);
const [deadline, setDeadline] = useState(task.deadline);
const [completed, setCompleted] = useState(task.completed);

const containerStyle = {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: '20px',
backgroundColor: '#f5f5f5',
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
padding: '10px 20px',
fontSize: '16px',
fontWeight: 'bold',
color: '#fff',
backgroundColor: '#007bff',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
transition: 'all 0.3s ease',
};

const hoverStyle = {
backgroundColor: '#0056b3',
};

const handleNameChange = (event) => {
setName(event.target.value);
};

const handleDeadlineChange = (event) => {
setDeadline(event.target.value);
};

const handleCompletedChange = () => {
setCompleted(!completed);
};

const handleEditTask = () => {
// Todo: Implement editing logic
};

const handleDeleteTask = () => {
// Todo: Implement deleting logic
};

return (
<div style={containerStyle}>
<h2 style={{ fontSize: '18px', margin: '20px 0' }}>{name}</h2>
<p style={{ fontSize: '16px', margin: '20px 0' }}>Deadline: {deadline}</p>
<p style={{ fontSize: '16px', margin: '20px 0' }}>
{completed ? 'Completed' : 'Active'}
</p>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<button
style={buttonStyle}
onMouseEnter={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
onClick={handleEditTask}
>
Edit
</button>
<button
style={buttonStyle}
onMouseEnter={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
onClick={handleDeleteTask}
>
Delete
</button>
</div>
</div>
);
};

export default TaskDetails;