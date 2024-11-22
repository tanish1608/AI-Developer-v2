import React, { useState } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ onSubmit, editMode = false, initialData }) => {
const [title, setTitle] = useState(initialData?.title || '');
const [description, setDescription] = useState(initialData?.description || '');

const handleSubmit = (event) => {
event.preventDefault();
onSubmit({ title, description });
};

return (
<form className={styles.form} onSubmit={handleSubmit}>
<label className={styles.label} htmlFor="title">
Title:
</label>
<input
type="text"
id="title"
value={title}
onChange={(event) => setTitle(event.target.value)}
className={styles.input}
/>
<br />
<label className={styles.label} htmlFor="description">
Description:
</label>
<textarea
id="description"
value={description}
onChange={(event) => setDescription(event.target.value)}
className={styles.textarea}
/>
<button type="submit" className={styles.submit}>
{editMode ? 'Save' : 'Create'}
</button>
</form>
);
};

export default TaskForm;