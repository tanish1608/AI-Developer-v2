import React, { useState } from 'react';

const TaskItem = ({ task }) => {
const [name, setName] = useState(task.name);
const [deadline, setDeadline] = useState(task.deadline);
const [completed, setCompleted] = useState(task.completed);

const containerStyle = {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: '10px',
borderBottom: '1px solid #ccc',
};

const inputStyle = {
padding: '5px',
fontSize: '16px',
border: '1px solid #ccc',
borderRadius: '5px',
};

const checkboxStyle = {
fontSize: '16px',
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

return (
<div style={containerStyle}>
<input
type="text"
value={name}
onChange={handleNameChange}
style={inputStyle}
placeholder="Task name"
/>
<input
type="date"
value={deadline}
onChange={handleDeadlineChange}
style={inputStyle}
placeholder="Deadline"
/>
<div style={{ display: 'flex', alignItems: 'center' }}>
<label>
<input
type="checkbox"
checked={completed}
onChange={handleCompletedChange}
style={checkboxStyle}
/>
<span style={{ fontSize: '16px' }}>{completed ? 'Completed' : 'Active'}</span>
</label>
</div>
</div>
);
};

export default TaskItem;