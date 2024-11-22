import React, { useState, useEffect } from 'react';

function TaskDetails({ task = {} }) {
const [loading, setLoading] = useState(false);

useEffect(() => {
setLoading(false);
}, [task]);

const handleDeleteTask = () => {
// Implement delete task logic here
};

// Inline CSS styles
const containerStyle = {
padding: "20px",
border: "1px solid #ccc",
borderRadius: "5px",
width: "50%",
margin: "20px auto",
};

const taskTextStyle = {
fontSize: "18px",
margin: "20px 0",
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

const buttonDisabledStyle = {
backgroundColor: "#cccccc",
cursor: "not-allowed",
};

const loadingStyle = {
backgroundColor: "#ffcc00",
};

return (
<div style={containerStyle}>
<h2 style={taskTextStyle}>{task.name}</h2>
<p>Deadline: {task.deadline}</p>
<p>Completed: {task.completed ? 'Yes' : 'No'}</p>
<button
style={{
...buttonStyle,
...(loading ? loadingStyle : {}),
":hover": buttonHoverStyle
}}
onClick={handleDeleteTask}
disabled={loading}
aria-live="polite"
>
{loading ? 'Deleting...' : 'Delete Task'}
</button>
</div>
);
}

export default TaskDetails;