import React, { useState } from "react";

function TaskFilter() {
const [filter, setFilter] = useState("all");

const filterStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "10px",
borderBottom: "1px solid #ccc",
};

const labelStyle = {
fontSize: "16px",
marginRight: "10px",
};

const handleFilterChange = (event) => {
setFilter(event.target.value);
};

const getFilteredTasks = () => {
// Call API to get filtered tasks based on the selected filter
// For simplicity, just return a fake task list
const fakeTasks = [
{ id: 1, title: "Task 1", deadline: "2023-03-15", completed: true },
{ id: 2, title: "Task 2", deadline: "2023-03-20", completed: false },
{ id: 3, title: "Task 3", deadline: "2023-03-25", completed: true },
];
return fakeTasks;
};

const filteredTasks = getFilteredTasks().filter((task) => {
if (filter === "all") return true;
if (filter === "completed" && task.completed) return true;
if (filter === "active" && !task.completed) return true;
return false;
});

return (
<div style={filterStyle}>
<label style={labelStyle}>Filter:</label>
<select onChange={handleFilterChange} value={filter}>
<option value="all">All</option>
<option value="completed">Completed</option>
<option value="active">Active</option>
</select>
</div>
);
}

export default TaskFilter;