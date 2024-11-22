
import React, { useState } from 'react';
import TaskFormView from './TaskFormView';
import TaskApi from '../TaskApi';

const handleSubmit = (taskName, taskDeadline, setToggleCreateTask) => {
const createTask = async () => {
const newTask = await TaskApi.createTask(taskName, taskDeadline);
setToggleCreateTask(false);
};

return createTask;
};

const TaskForm = () => {
const [taskName, setTaskName] = useState('');
const [taskDeadline, setTaskDeadline] = useState('');
const [toggleCreateTask, setToggleCreateTask] = useState(false);

return (
<div>
<TaskFormView
taskName={taskName}
taskDeadline={taskDeadline}
setTaskName={setTaskName}
setTaskDeadline={setTaskDeadline}
toggleCreateTask={toggleCreateTask}
onSubmit={handleSubmit(taskName, taskDeadline, setToggleCreateTask)}
/>
</div>
);
};

export default TaskForm;