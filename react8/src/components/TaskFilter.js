import React, { useState } from "react";

function TaskFilter() {
const [filterOption, setFilterOption] = useState("all");

const filterOptions = [
{ value: "all", label: "All" },
{ value: "completed", label: "Completed" },
{ value: "incomplete", label: "Incomplete" },
];

const filterStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "10px",
border: "1px solid #ddd",
borderRadius: "5px",
};

const optionStyle = {
padding: "10px",
cursor: "pointer",
};

const handleFilterChange = (event) => {
setFilterOption(event.target.value);
};

return (
<div style={filterStyle}>
<label>Filter tasks by completion status:</label>
<select value={filterOption} onChange={handleFilterChange} style={optionStyle}>
{filterOptions.map((option, index) => (
<option key={index} value={option.value}>
{option.label}
</option>
))}
</select>
</div>
);
}

export default TaskFilter;