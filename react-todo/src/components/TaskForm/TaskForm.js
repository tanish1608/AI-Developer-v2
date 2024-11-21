import React, { useState } from "react";
 export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && deadline && progress) {
      // Add task to the list
      addTask({ task, deadline, progress });
      // Reset form
      setTask("");
      setDeadline("");
      setProgress("");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <h2>Add a new task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
       `e3    `
    </div>
  );
}