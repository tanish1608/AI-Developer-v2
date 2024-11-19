"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { TodoItemProps } from "@/types/TodoItemType";
import style from "./TodoItem.module.css";

export default function TodoItem({ todo }: TodoItemProps) {
const [editedTitle, setEditedTitle] = useState(todo.title);
const [editingMode, setEditingMode] = useState(false);

useEffect(() => {
if (editingMode && editedTitle !== todo.title) {
axios.put(`/api/todo/${todo.id}`, { title: editedTitle })
.then(response => console.log(response))
.catch(error => console.error(error));
}
}, [editedTitle, editingMode]);

const handleToggleCompleted = () => {
axios.patch(`/api/todo/${todo.id}`, { completed: !todo.completed })
.then(response => console.log(response))
.catch(error => console.error(error));
};

return (
<div className="flex flex-col gap-4">
<input
type="checkbox"
checked={todo.completed}
onChange={handleToggleCompleted}
className={style.checkbox}
/>
{editingMode ? (
<input
type="text"
value={editedTitle}
onChange={(e) => setEditedTitle(e.target.value)}
className={style.inputField}
/>
) : (
<span className={style.title}>{todo.title}</span>
)}
<div className="flex gap-4">
{editingMode ? (
<button onClick={() => setEditingMode(false)}>Save</button>
) : (
<button onClick={() => setEditingMode(true)}>Edit</button>
)}
<button onClick={() => axios.delete(`/api/todo/${todo.id}`)}>
Delete
</button>
</div>
</div>
);
}