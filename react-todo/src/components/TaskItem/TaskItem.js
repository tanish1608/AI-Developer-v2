import { useState } from "react";
import styles from "./TaskItem.module.css";

function TaskItem({ task, onDeleteTask, onCompleteTask }) {
const [completed, setCompleted] = useState(task.completed);

function handleToggleComplete() {
setCompleted(!completed);
onCompleteTask(task.id);
}

return (
<div className={styles.container}>
<input
type="checkbox"
checked={completed}
onChange={handleToggleComplete}
className={styles.checkbox}
/>
<span className={styles.taskName}>{task.name}</span>
<button
onClick={() => onDeleteTask(task.id)}
className={styles.deleteButton}
>
Delete
</button>
</div>
);
}

export default TaskItem;