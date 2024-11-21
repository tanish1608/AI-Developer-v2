import React from "react";
import "./TaskList.module.css";

export default function TaskList({ tasks }) {
  return (
    <div className="task-list-container">
      <h2>Your tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>Task:</strong> {task.task} <br />
            <strong>Deadline:</strong> {task.deadline} <br />
            <strong>Progress:</strong> {task.progress}
          </li>
        ))}
      </ul>
    </div>
  );
}