import React, { useState } from "react";

function TaskForm() {
const [taskName, setTaskName] = useState("");
const [deadline, setDeadline] = useState("");
const [completed, setCompleted] = useState(false);

const formStyle = {
display: "flex",
flexDirection: "column",
alignItems: "center",
};

const inputStyle = {
padding: "10px",
fontSize: "16px",
marginBottom: "20px",
};

const submitStyle = {
padding: "10px 20px",
fontSize: "16px",
fontWeight: "bold",
backgroundColor: "#007bff",
border: "none",
borderRadius: "5px",
cursor: "pointer",
transition: "all 0.3s ease",
};

const hoverSubmitStyle = {
backgroundColor: "#0056b3",
};

const handleSubmit = (event) => {
event.preventDefault();
// Add logic to create new task here
console.log("Task created: name =", taskName, "deadline =", deadline, "completed =", completed);
};

return (
<form style={formStyle}>
<input
type="text"
value={taskName}
onChange={(event) => setTaskName(event.target.value)}
style={inputStyle}
placeholder="Task name"
/>
<input
type="date"
value={deadline}
onChange={(event) => setDeadline(event.target.value)}
style={inputStyle}
placeholder="Deadline"
/>
<input
type="checkbox"
checked={completed}
onChange={(event) => setCompleted(event.target.checked)}
style={inputStyle}
/>
<label style={{ marginLeft: "5px" }}>Completed</label>
<button
type="submit"
style={submitStyle}
onMouseEnter={(e) => (e.target.style.backgroundColor = hoverSubmitStyle.backgroundColor)}
onMouseLeave={(e) => (e.target.style.backgroundColor = submitStyle.backgroundColor)}
onClick={handleSubmit}
>
Create Task
</button>
</form>
);
}

export default TaskForm;