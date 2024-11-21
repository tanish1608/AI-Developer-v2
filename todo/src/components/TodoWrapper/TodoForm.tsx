"use client";

import { useState } from "react";
import axios from "axios";
import style from "./TodoForm.module.css";

interface Props {
onAddTodo: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function TodoForm({ onAddTodo }: Props) {
const [newTodo, setNewTodo] = useState("");

return (
<form onSubmit={onAddTodo} className={style.form}>
<input
type="text"
value={newTodo}
onChange={(event) => setNewTodo(event.target.value)}
placeholder="Add new todo"
className={style.input}
/>
<button type="submit" className={style.addButton}>Add</button>
</form>
);
}