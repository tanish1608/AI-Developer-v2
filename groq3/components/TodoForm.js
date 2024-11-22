import React, { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = () => {
const [title, setTitle] = useState('');
const [completed, setCompleted] = useState(false);

const handleSubmit = (event) => {
event.preventDefault();
console.log('Form submitted:', { title, completed });
};

return (
<form className={styles.form} onSubmit={handleSubmit}>
<label className={styles.label} htmlFor="title">
Title:
</label>
<input
className={styles.input}
type="text"
id="title"
value={title}
onChange={(event) => setTitle(event.target.value)}
placeholder="Enter task title"
/>
<label className={styles.label} htmlFor="completed">
Completed:
</label>
<input
className={styles.input}
type="checkbox"
id="completed"
checked={completed}
onChange={(event) => setCompleted(event.target.checked)}
/>
<button className={styles.button} type="submit">
Add Task
</button>
</form>
);
};

export default TodoForm;