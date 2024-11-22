import React, { useState } from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask, isCompleted: false },
    ]);
    setNewTask('');
  };

  // Mark a task as complete/incomplete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Task Management System</h1>
      <p>Welcome to your task management system! Manage all your tasks below.</p>

      {/* Task Input */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className={styles.taskInput}
        />
        <button onClick={addTask} className={styles.addButton}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className={styles.taskList}>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`${styles.taskItem} ${
                task.isCompleted ? styles.completed : ''
              }`}
            >
              <span
                onClick={() => toggleTaskCompletion(task.id)}
                className={styles.taskTitle}
              >
                {task.title}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;