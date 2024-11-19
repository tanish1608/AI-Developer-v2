"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./ToDoWrapper.module.css";

interface ToDoProps {
title?: string;
}

export default function ToDoWrapper({ title }: ToDoProps) {
const [todos, setTodos] = useState([]);
const [newTodoTitle, setNewTodoTitle] = useState("");
const [editedTodoId, setEditedTodoId] = useState(null);
const [editingMode, setEditingMode] = useState(false);

useEffect(() => {
if (editedTodoId !== null) {
const editedTodoIndex = todos.findIndex((todo) => todo.id === editedTodoId);
if (editedTodoIndex >= 0) {
setTodos((prevTodos) =>
prevTodos.map((todo) => (todo.id === editedTodoId ? { ...todo, title: newTodoTitle } : todo))
);
}
}
}, [newTodoTitle]);

const handleAddNewTodo = () => {
if (!newTodoTitle.trim()) return;
setTodos((prevTodos) => [
...prevTodos,
{ id: Math.random().toString(36).slice(2), title: newTodoTitle, completed: false },
]);
setNewTodoTitle("");
};

const handleToggleCompleted = (todoId) => {
setTodos((prevTodos) =>
prevTodos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))
);
};

return (
<div className="flex flex-col gap-4">
<h2 className={style.title}>{title}</h2>
<input
type="text"
value={newTodoTitle}
onChange={(e) => setNewTodoTitle(e.target.value)}
placeholder="Add new to-do item..."
className={style.inputField}
/>
{editingMode ? (
<button onClick={() => handleToggleCompleted(editedTodoId)}>Save Edits</button>
) : (
<button onClick={handleAddNewTodo}>Add To-Do</button>
)}
{todos.map((todo, index) => (
<div key={index} className={style.todoItem}>
<input
type="checkbox"
checked={todo.completed}
onChange={() => handleToggleCompleted(todo.id)}
className={style.checkbox}
/>
<span>{todo.title}</span>
{editedTodoId === todo.id ? (
<button onClick={() => setNewTodoTitle(todo.title)}>Edit</button>
) : (
<button onClick={() => setEditedTodoId(todo.id)}>Edit</button>
)}
<button onClick={() => setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id))}>
Delete
</button>
</div>
))}
</div>
);
}