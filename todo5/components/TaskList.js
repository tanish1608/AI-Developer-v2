import React, { useState } from 'react';
import styles from './TaskList.module.css';
import TaskItem from './TaskItem';

function TaskList() {
const [tasks, setTasks] = useState([
{ id: 1, title: 'Buy milk', completed: false },
{ id: 2, title: 'Do laundry', completed: true },
{ id: 3, title: 'Walk the dog', completed: false },
]);

const handleTaskToggle = (taskId) => {
setTasks((prevTasks) =>
prevTasks.map((task) => {
if (task.id === taskId) {
return { ...task, completed: !task.completed };
}
return task;
})
);
};

return (
<div className={styles.task_list}>
<ul className={styles.tasks}>
{tasks.map((task) => (
<li key={task.id} className={styles.task_item}>
<TaskItem
taskTitle={task.title}
isCompleted={task.completed}
onToggle={() => handleTaskToggle(task.id)}
/>
</li>
))}
</ul>
</div>
);
}

export default TaskList;