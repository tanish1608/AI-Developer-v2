import React, { useState, useEffect } from "react";

function TodoItem({ task, onEdit, onDelete }) {
const [isEditing, setIsEditing] = useState(false);
const [editedTask, setEditedTask] = useState(task);

const containerStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "10px",
border: "1px solid #ccc",
borderRadius: "5px",
marginBottom: "10px",
};

const taskNameStyle = {
fontSize: "16px",
fontWeight: "bold",
};

const deadlineStyle = {
fontSize: "14px",
color: "#666",
};

const buttonsStyle = {
display: "flex",
justifyContent: "space-between",
};

const handleEditButtonClick = () => {
setIsEditing(true);
};

const handleDeleteButtonClick = () => {
onDelete(task.id);
};

const handleEditedTaskChange = (e) => {
setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
};

const handleEditedTaskSave = () => {
onEdit(editedTask);
setIsEditing(false);
};

if (isEditing) {
return (
<div style={containerStyle}>
<input
type="text"
name="name"
value={editedTask.name}
onChange={handleEditedTaskChange}
style={taskNameStyle}
/>
<input
type="date"
name="deadline"
value={editedTask.deadline}
onChange={handleEditedTaskChange}
style={deadlineStyle}
/>
<button onClick={handleEditedTaskSave}>Save</button>
</div>
);
}

return (
<div style={containerStyle}>
<p style={taskNameStyle}>{task.name}</p>
<p style={deadlineStyle}>{task.deadline}</p>
<div style={buttonsStyle}>
<button onClick={handleEditButtonClick}>Edit</button>
<button onClick={handleDeleteButtonClick}>Delete</button>
</div>
</div>
);
}

export default TodoItem;