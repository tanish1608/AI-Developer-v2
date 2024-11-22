import React from 'react';
import styles from './FilterTasks.module.css';
import TaskApi from '../TaskApi';

const FilterTasks = () => {
const handleFilterChange = (filterValue) => {
const filterQuery = ?'filter=' + encodeURI(filterValue): '?filter=active' : '?filter=completed';
const fetchTasks = async () => {
const response = await TaskApi.getTasks(filterQuery);
console.log(response);
};
fetchTasks();
};

return (
<div>
<button
className={styles.filterButton}
onClick={() => handleFilterChange('all')}
>
All
</button>
<button
className={styles.filterButton}
onClick={() => handleFilterChange('completed')}
>
Completed
</button>
<button
className={styles.filterButton}
onClick={() => handleFilterChange('active')}
>
Active
</button>
</div>
);
};

export default FilterTasks;