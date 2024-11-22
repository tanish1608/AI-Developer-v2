import React, { useState } from 'react';

function TaskForm({ onSubmit = () => {} }) {
const [name, setName] = useState('');
const [deadline, setDeadline] = useState('');
const [completed, setCompleted] = useState(false);

const handleNameChange = (event) => {
setName(event.target.value);
};

const handleDeadlineChange = (event) => {
setDeadline(event.target.value);
};

const handleCompletedChange = (event) => {
setCompleted(event.target.checked);
};

const handleSubmit = (event) => {
event.preventDefault();
onSubmit({ name, deadline, completed });
};

// Inline CSS styles
const formStyle = {
padding: "20px",
border: "1px solid #ccc",
borderRadius: "5px",
width: "50%",
margin: "20px auto",
};

const inputStyle = {
padding: "10px",
fontSize: "16px",
border: "1px solid #ccc",
borderRadius: "5px",
width: "100%",
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

return (
<form onSubmit={handleSubmit} style={formStyle}>
<label>
Name:
<input
type="text"
value={name}
onChange={handleNameChange}
style={inputStyle}
/>
</label>
<br />
<label>
Deadline:
<input
type="date"
value={deadline}
onChange={handleDeadlineChange}
style={inputStyle}
/>
</label>
<br />
<label>
Completed:
<input
type="checkbox"
checked={completed}
onChange={handleCompletedChange}
style={inputStyle}
/>
</label>
<br />
<button
style={{
...buttonStyle,
":hover": buttonHoverStyle
}}
type="submit"
>
Submit
</button>
</form>
);
}

export default TaskForm;