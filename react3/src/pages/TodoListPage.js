import React from "react";

const TodoListPage = () => {
const containerStyle = {
maxWidth: "800px",
margin: "20px auto",
padding: "20px",
backgroundColor: "#f0f0f0",
borderRadius: "8px",
textAlign: "center",
fontFamily: "Arial, sans-serif",
};

const listStyle = {
listStyle: "none",
padding: "0",
margin: "0",
};

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
};

const taskDeadlineStyle = {
fontSize: "16px",
color: "#666",
};

return (
<div style={containerStyle}>
<h1 style={{ fontSize: "32px", color: "#333" }}> Todo List</h1>
<ul style={listStyle}>
<li style={taskItemStyle}>
<span style={taskTitleStyle}>Task 1</span>
<span style={taskDeadlineStyle}>2023-03-15</span>
</li>
<li style={taskItemStyle}>
<span style={taskTitleStyle}>Task 2</span>
<span style={taskDeadlineStyle}>2023-03-20</span>
</li>
<li style={taskItemStyle}>
<span style={taskTitleStyle}>Task 3</span>
<span style={taskDeadlineStyle}>2023-03-25</span>
</li>
</ul>
</div>
);
};

export default TodoListPage;