import React from "react";

const Home = () => {
const containerStyle = {
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
height: "100vh",
backgroundColor: "#f0f0f0",
};

const taskListStyle = {
listStyle: "none",
margin: 0,
padding: 0,
display: "flex",
flexDirection: "column",
alignItems: "center",
};

const taskItemStyle = {
padding: "20px",
border: "1px solid #ddd",
borderRadius: "5px",
marginBottom: "20px",
};

return (
<div style={containerStyle}>
<h1 style={{ fontSize: "32px", color: "#333" }}>
Welcome to Our Task Manager
</h1>
<p style={{ fontSize: "18px", color: "#666" }}>
Here, you can manage your tasks, add new ones, and view their status.
</p>
<ul style={taskListStyle}>
{// list of tasks}
<li style={taskItemStyle}>
<p>Task 1: Do it!</p>
</li>
<li style={taskItemStyle}>
<p>Task 2: Do it!</p>
</li>
<li style={taskItemStyle}>
<p>Task 3: Do it!</p>
</li>
</ul>
</div>
);
};

export default Home;