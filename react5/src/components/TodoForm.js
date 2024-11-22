import React, { useState } from "react";
import { Modal } from "../Modal";

function TodoForm() {
const [formFields, setFormFields] = useState({ name: "", deadline: "", completed: false });
const [errors, setErrors] = useState({});

const formStyle = {
padding: "20px",
backgroundColor: "#f7f7f7",
border: "1px solid #ccc",
borderRadius: "5px",
};

const inputStyle = {
width: "100%",
height: "40px",
padding: "10px",
fontSize: "16px",
borderRadius: "5px",
border: "1px solid #ccc",
};

const handleInputChange = (e) => {
setFormFields({ ...formFields, [e.target.name]: e.target.value });
};

const handleFormSubmission = (e) => {
e.preventDefault();
const { name, deadline, completed } = formFields;
if (name && deadline) {
// Implement API call or local storage to add new task
console.log({ name, deadline, completed });
} else {
setErrors({ name: !name ? "Required" : "", deadline: !deadline ? "Required" : "" });
}
};

return (
<form style={formStyle} onSubmit={handleFormSubmission}>
<h2 style={{ margin: "10px 0" }}>Add New Task</h2>
<label>
Task Name:
<input
type="text"
name="name"
value={formFields.name}
onChange={handleInputChange}
style={inputStyle}
/>
{errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
</label>
<label>
Deadline:
<input
type="date"
name="deadline"
value={formFields.deadline}
onChange={handleInputChange}
style={inputStyle}
/>
{errors.deadline && <p style={{ color: "red" }}>{errors.deadline}</p>}
</label>
<label>
Completed:
<input
type="checkbox"
name="completed"
checked={formFields.completed}
onChange={(e) => setFormFields({ ...formFields, completed: e.target.checked })}
style={{ margin: "0 10px" }}
/>
</label>
<button type="submit" style={{ marginTop: "10px" }}>
Add Task
</button>
</form>
);
}

export default TodoForm;