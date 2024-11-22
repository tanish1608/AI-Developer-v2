import React, { useState } from 'react';

function TaskFilter({ onFilterTasks = () => {} }) {
const [filterStatus, setFilterStatus] = useState('all');

const handleFilterChange = (event) => {
setFilterStatus(event.target.value);
onFilterTasks(event.target.value);
};

// Inline CSS styles
const containerStyle = {
padding: "20px",
border: "1px solid #ccc",
borderRadius: "5px",
width: "50%",
margin: "20px auto",
};

const buttonStyle = {
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

const buttonHoverStyle = {
backgroundColor: "#0056b3",
};

const buttonActiveStyle = {
backgroundColor: "#0056b3",
};

return (
<div style={containerStyle}>
<label>
Filter by completion status:
<select value={filterStatus} onChange={handleFilterChange}>
<option value="all">All</option>
<option value="completed">Completed</option>
<option value="pending">Pending</option>
</select>
</label>
</div>
);
}

export default TaskFilter;