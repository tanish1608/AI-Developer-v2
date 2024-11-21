"use client";
import axios from "axios";
import { TodoProps } from "@/types/TodoItemType";
import TodoItem from "@/components/TodoItem";

export default function TodoWrapper({ todos=[] }: TodoProps) {
  return (
    <ul >
      {todos.map((todo, index) => (
        <li key={index} className="mb-4">
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}