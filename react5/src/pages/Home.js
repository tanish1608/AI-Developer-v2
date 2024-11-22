import React from "react";
import TodoFilter from "../components/TodoFilter";
const HomePage = () => {
const containerStyle = {
maxWidth: "800px",
margin: "20px auto",
padding: "20px",
backgroundColor: "#f0f0f0",
borderRadius: "8px",
textAlign: "center",
fontFamily: "Arial, sans-serif",
};

const headingStyle = {
fontSize: "32px",
color: "#333",
};

const todoListStyle = {
listStyle: "none",
padding: "0",
margin: "0",
};

const todoItemStyle = {
padding: "10px",
border: "1px solid #ccc",
borderRadius: "8px",
};

return (
<div style={containerStyle}>
<h1 style={headingStyle}>Task Manager</h1>
<p style={{ fontSize: "18px", color: "#666" }}>
Welcome to the Task Manager! This application allows you to create,
view, and manage tasks. You can filter tasks by completion status and
create new tasks using the buttons below.
</p>
<ul style={todoListStyle}>
{/ TodoList component will be implemented here /}
</ul>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<button style={{ fontSize: "16px", padding: "10px 20px" }}>
Create New Task
</button>
{/* <TodoFilter /> */}save
</div>
</div>
);
};

export default HomePage;