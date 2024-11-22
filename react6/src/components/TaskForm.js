import React, { useState } from 'react';

const TaskForm = () => {
const [taskName, setTaskName] = useState('');
const [deadline, setDeadline] = useState('');
const [completed, setCompleted] = useState(false);

const formStyle = {
maxWidth: '300px',
margin: '0 auto',
padding: '20px',
backgroundColor: '#f5f5f5',
border: '1px solid #ddd',
borderRadius: '5px',
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
padding: '10px',
fontSize: '16px',
border: '1px solid #ccc',
borderRadius: '5px',
};

const handleSubmit = (event) => {
event.preventDefault();
// Add logic to create a new task here
console.log('New task created:', { taskName, deadline, completed });
};

return (
<form onSubmit={handleSubmit} style={formStyle}>
<h2>Create New Task</h2>
<label style={{ marginBottom: '10px' }}>
Task Name:
<input
type="text"
value={taskName}
onChange={(event) => setTaskName(event.target.value)}
style={inputStyle}
required
/>
</label>
<label style={{ marginBottom: '10px' }}>
Deadline:
<input
type="date"
value={deadline}
onChange={(event) => setDeadline(event.target.value)}
style={inputStyle}
required
/>
</label>
<label style={{ marginBottom: '10px' }}>
Completed:
<input
type="checkbox"
checked={completed}
onChange={(event) => setCompleted(event.target.checked)}
style={inputStyle}
/>
</label>
<button type="submit" style={{ marginLeft: '20px' }}>
Create
</button>
</form>
);
};

export default TaskForm;