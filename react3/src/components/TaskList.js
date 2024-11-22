import React, { useState, useEffect } from "react";

function TaskList() {
const [tasks, setTasks] = useState([]);
const [filter, setFilter] = useState("all");

const taskListStyle = {
listStyle: "none",
padding: "0",
margin: "0",
overflow: "hidden",
};

const taskStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "10px",
borderBottom: "1px solid #ccc",
};

const completedTaskStyle = {
textDecoration: "line-through",
color: "#666",
};

useEffect(() => {
// Load tasks from API or local storage
const fakeTasks = [
{ id: 1, title: "Task 1", deadline: "2023-03-15", completed: true },
{ id: 2, title: "Task 2", deadline: "2023-03-20", completed: false },
{ id: 3, title: "Task 3", deadline: "2023-03-25", completed: true },
];
setTasks(fakeTasks);
}, []);

const handleFilterChange = (event) => {
setFilter(event.target.value);
};

const filteredTasks = tasks.filter((task) => {
if (filter === "all") return true;
if (filter === "completed" && task.completed) return true;
if (filter === "active" && !task.completed) return true;
return false;
});

return (
<div>
<div style={{ marginRight: "20px" }}>
<label>Filter:</label>
<select onChange={handleFilterChange} value={filter}>
<option value="all">All</option>
<option value="completed">Completed</option>
<option value="active">Active</option>
</select>
</div>
<ul style={taskListStyle}>
{filteredTasks.map((task) => (
<li style={taskStyle} key={task.id}>
<span style={task.completed ? completedTaskStyle : {}}>{task.title}</span>
<span>{task.deadline}</span>
<span>{task.completed ? "Completed" : "Not completed"}</span>
</li>
))}
</ul>
</div>
);
}

export default TaskList;