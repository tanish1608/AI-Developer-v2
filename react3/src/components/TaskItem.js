import React from "react";

function TaskItem({ task }) {
const taskItemStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "10px",
borderBottom: "1px solid #ccc",
};

const taskTitleStyle = {
fontSize: "18px",
fontWeight: "bold",
marginRight: "20px",
};

const taskDeadlineStyle = {
fontSize: "16px",
color: "#666",
};

const taskCompletedStyle = {
textDecoration: "line-through",
color: "#666",
};

const handleTaskClick = () => {
// Call API to toggle task completion (e.g. POST /tasks/{id}/complete)
// For simplicity, just log the task data to the console
console.log(`Task ${task.id} clicked`);
};

return (
<div style={taskItemStyle}>
<span style={taskTitleStyle}>{task.title}</span>
<span style={taskDeadlineStyle}>{task.deadline}</span>
<span style={task.completed ? taskCompletedStyle : {}}>
{task.completed ? "Completed" : "Not completed"}
</span>
<button
style={{
backgroundColor: "#007bff",
color: "#fff",
border: "none",
borderRadius: "5px",
cursor: "pointer",
}}
onClick={handleTaskClick}
>
Toggle
</button>
</div>
);
}

export default TaskItem;