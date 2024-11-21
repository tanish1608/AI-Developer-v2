"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { TodoProps } from "@/types/TodoItemType";
import style from "./TodoItem.module.css";

export default function TodoItem({ todo }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  useEffect(() => {
    if (isEditing) {
      axios.post(`/api/todos/${todo.id}/edit`, { title: newTitle })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
    }
  }, [isEditing, newTitle]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios.post(`/api/todos/${todo.id}/save`, { title: newTitle })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
    setIsEditing(false);
  };

  const handleDelete = () => {
    axios.delete(`/api/todos/${todo.id}`)
      .then(() => console.log("Todo deleted"))
      .catch(error => console.error(error));
  };

  return (
    <div className="flex flex-col gap-2">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className={style.input}
        />
      ) : (
        <p className={style.title}>{todo.title}</p>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className={style.button}>
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className={style.button}>
            Edit
          </button>
        )}
        <button onClick={handleDelete} className={style.button}>
          Delete
        </button>
      </div>
    </div>
  );
}