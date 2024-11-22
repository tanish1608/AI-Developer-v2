import React from "react";

function TaskCard() {
const [taskName, setTaskName] = useState("");
const [deadline, setDeadline] = useState("");
const [completed, setCompleted] = useState(false);

const cardStyle = {
border: "1px solid #ccc",
padding: "20px",
borderRadius: "5px",
boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
};

const taskNameStyle = {
fontSize: "18px",
fontWeight: "bold",
};

const deadlineStyle = {
fontSize: "16px",
color: "#666",
};

const completionStatusStyle = {
fontSize: "16px",
color: completed ? "#007bff" : "#999",
};

const handleTaskNameChange = (event) => {
setTaskName(event.target.value);
};

const handleDeadlineChange = (event) => {
setDeadline(event.target.value);
};

const handleCompletionStatusChange = () => {
setCompleted(!completed);
};

return (
<div style={cardStyle}>
<h2 style={taskNameStyle}>{taskName}</h2>
<p style={deadlineStyle}>Deadline: {deadline}</p>
<p style={completionStatusStyle}>
{completed ? "Completed" : "Not completed"}
</p>
<button onClick={handleCompletionStatusChange}>
{completed ? "Mark as not completed" : "Mark as completed"}
</button>
</div>
);
}

export default TaskCard;