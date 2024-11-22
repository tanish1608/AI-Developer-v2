import React from 'react';
import './TaskFilter.module.css';

function TaskFilter() {
const [filter, setFilter] = React.useState('');

const handleFilterChange = (event) => {
setFilter(event.target.value);
};

return (
<div className="task-filter">
<input
type="search"
value={filter}
onChange={handleFilterChange}
placeholder="Search tasks"
className="task-filter-input"
/>
</div>
);
}

export default TaskFilter;