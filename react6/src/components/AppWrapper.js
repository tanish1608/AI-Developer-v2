import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import TaskDetailsPage from './TaskDetailsPage';

function AppWrapper() {
const [tasks, setTasks] = useState([]);
const [currentTaskId, setCurrentTaskId] = useState(null);

useEffect(() => {
// Initialize tasks data here
setTasks([
{ id: 1, name: 'Task 1', deadline: '2023-03-01', completed: false },
{ id: 2, name: 'Task 2', deadline: '2023-03-15', completed: true },
{ id: 3, name: 'Task 3', deadline: '2023-04-01', completed: false },
]);
}, []);

const handleTaskDetailsPageChange = (id) => {
setCurrentTaskId(id);
};

const containerStyle = {
display: 'flex',
flexFlow: 'column',
height: '100vh',
width: '100vw',
margin: '0 auto',
padding: '20px',
backgroundColor: '#f5f5f5',
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

return (
<BrowserRouter>
<div style={containerStyle}>
<Header />
<Switch>
<Route path="/" exact component={HomePage} />
<Route path="/task/:id" component={TaskDetailsPage} />
</Switch>
</div>
</BrowserRouter>
);
}

export default AppWrapper;