import React, { useState } from "react";

function TaskForm() {
const [taskTitle, setTaskTitle] = useState("");
const [taskDeadline, setTaskDeadline] = useState("");
const [taskStatus, setTaskStatus] = useState(false);

const containerStyle = {
width: "300px",
margin: "40px auto",
padding: "20px",
backgroundColor: "#fff",
borderRadius: "10px",
boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const inputStyle = {
width: "100%",
height: "40px",
padding: "10px",
fontSize: "16px",
borderRadius: "5px",
};

const buttonStyle = {
width: "100%",
height: "40px",
padding: "10px",
fontSize: "16px",
borderRadius: "5px",
backgroundColor: "#007bff",
color: "#fff",
cursor: "pointer",
};

const handleFormChange = (event) => {
const { name, value } = event.target;
if (name === "title") {
setTaskTitle(value);
} else if (name === "deadline") {
setTaskDeadline(value);
} else if (name === "status") {
setTaskStatus(value);
}
};

const handleSubmit = (event) => {
event.preventDefault();
// Call API to create new task
// For simplicity, just log the task data to the console
console.log({ title: taskTitle, deadline: taskDeadline, status: taskStatus });
};

return (
<form style={containerStyle} onSubmit={handleSubmit}>
<label style={{ margin: "10px 0" }}>
Title:
<input
type="text"
value={taskTitle}
onChange={handleFormChange}
name="title"
style={inputStyle}
/>
</label>
<label style={{ margin: "10px 0" }}>
Deadline:
<input
type="date"
value={taskDeadline}
onChange={handleFormChange}
name="deadline"
style={inputStyle}
/>
</label>
<label style={{ margin: "10px 0" }}>
Status:
<input
type="checkbox"
checked={taskStatus}
onChange={(event) => setTaskStatus(event.target.checked)}
name="status"
style={inputStyle}
/>
</label>
<button style={buttonStyle} type="submit">
Create Task
</button>
</form>
);
}

export default TaskForm;