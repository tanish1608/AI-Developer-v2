import React, { useState } from "react";

function TodoFilter() {
const [filterType, setFilterType] = useState("all");

const filterStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "10px",
border: "1px solid #ccc",
borderRadius: "5px",
marginBottom: "10px",
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
transition: "all 0.3s ease",
};

const hoverStyle = {
backgroundColor: "#0056b3",
};

const handleFilterChange = (e) => {
setFilterType(e.target.value);
};

return (
<div style={filterStyle}>
<button
style={buttonStyle}
value="all"
onClick={handleFilterChange}
className={filterType === "all" ? "active" : ""}
>
Show All
</button>
<button
style={buttonStyle}
value="completed"
onClick={handleFilterChange}
className={filterType === "completed" ? "active" : ""}
>
Show Completed
</button>
<button
style={buttonStyle}
value="active"
onClick={handleFilterChange}
className={filterType === "active" ? "active" : ""}
>
Show Active
</button>
</div>
);
}

export default TodoFilter;