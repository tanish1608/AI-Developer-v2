import React, { useState } from 'react';

const TaskList = () => {
const [tasks, setTasks] = useState([]);
const [ filter, setFilter ] = useState('all');

const containerStyle = {
width: '80%',
margin: '0 auto',
padding: '20px',
backgroundColor: '#f5f5f5',
border: '1px solid #ddd',
borderRadius: '5px',
};

const taskStyle = {
padding: '10px',
fontSize: '16px',
border: '1px solid #ccc',
borderRadius: '5px',
};

const handleFilterChange = (event) => {
setFilter(event.target.value);
};

const filteredTasks = tasks.filter((task) => {
if (filter === 'all') {
return true;
} else if (filter === 'completed' && task.completed) {
return true;
} else if (filter === 'active' && !task.completed) {
return true;
}
return false;
});

return (
<div style={containerStyle}>
<h2>Task List</h2>
<form style={{ display: 'flex', alignItems: 'center' }}>
<label>
Filter by:
<select value={filter} onChange={handleFilterChange}>
<option value="all">All</option>
<option value="completed">Completed</option>
<option value="active">Active</option>
</select>
</label>
</form>
<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
{filteredTasks.map((task) => (
<li key={task.id} style={taskStyle}>
<p>
{task.name} ({task.deadline})
</p>
{task.completed ? (
<span style={{ color: 'green' }}>Completed</span>
) : (
<span style={{ color: 'red' }}>(Active)</span>
)}
</li>
))}
</ul>
</div>
);
};

export default TaskList;