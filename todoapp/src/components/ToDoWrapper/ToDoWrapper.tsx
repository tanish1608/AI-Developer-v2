"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ToDoItem from "@/types/ToDoItemType";

export default function ToDoWrapper() {
const [toDoList, setToDoList] = useState<ToDoItem[]>([]);
const [error, setError] = useState(null);

useEffect(() => {
axios.get('/api/to-do')
.then(response => setToDoList(response.data))
.catch(error => setError(error));
}, []);

return (
<div className="toDoList">
{toDoList.map((item) => (
<p key={item.id}>
{item.title}
<button onClick={() => console.log('delete item', item)}>Delete</button>
<button onClick={() => console.log('edit item', item)}>Edit</button>
</p>
))}
</div>
);
}