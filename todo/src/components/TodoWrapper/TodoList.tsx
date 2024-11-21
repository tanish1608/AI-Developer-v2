"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import style from "./TodoList.module.css";
import { TodoListProps } from "@/types/TodoWrapperType";
import TodoForm from "./TodoForm";

interface Props extends TodoListProps {}

export default function TodoList({ todos, setTodos }: Props) {
const [newTodo, setNewTodo] = useState("");
const [error, setError] = useState(null);

useEffect(() => {
axios.get("/api/todos")
.then(response => setTodos(response.data))
.catch(error => setError(error));
}, []);

const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
if (!newTodo) return;
axios.post("/api/todos", { title: newTodo })
.then(response => setTodos([...todos, response.data]))
.catch(error => setError(error));
};

const handleDeleteTodo = (id: string) => {
axios.delete(`/api/todos/${id}`)
.then(() => setTodos(todos.filter(todo => todo.id !== id)))
.catch(error => setError(error));
};

return (
<div className="flex flex-col gap-4">
<h2 className={style.title}>Todo List</h2>
<ul className={style.list}>
{todos.map((todo) => (
<li key={todo.id} className={style.item}>
<input
type="checkbox"
checked={todo.completed}
onChange={() =>
axios.patch(`/api/todos/${todo.id}`, { completed: !todo.completed })
.then(response => setTodos(todos.map((t) => (t.id === todo.id ? response.data : t))))
.catch(error => setError(error))
}
/>
<span className={style.title}>{todo.title}</span>
<button
type="button"
onClick={() => handleDeleteTodo(todo.id)}
className={style.deleteButton}
>
Delete
</button>
</li>
))}
</ul>
<TodoForm onAddTodo={handleAddTodo} />
</div>
);
}