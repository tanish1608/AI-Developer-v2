import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface Todo {
id: string;
title: string;
completed: boolean;
}

let todos: Todo[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
switch (req.method) {
case 'GET':
try {
const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
todos = response.data;
res.status(200).json(todos);
} catch (error) {
console.error(error);
res.status(500).end('Internal Server Error');
}
break;

case 'POST':
const { title, completed } = req.body;
if (!title) {
res.status(400).json({ error: 'Title is required' });
} else {
try {
const newTodo: Todo = {
id: Date.now().toString(),
title,
completed: completed || false,
};
todos.push(newTodo);
res.status(201).json(newTodo);
} catch (error) {
console.error(error);
res.status(500).end('Internal Server Error');
}
}
break;

case 'PUT':
const { id, title, completed } = req.body;
if (!id) {
res.status(400).json({ error: 'ID is required' });
} else {
try {
const todoIndex = todos.findIndex(todo => todo.id === id);
if (todoIndex !== -1) {
todos[todoIndex].title = title;
todos[todoIndex].completed = completed || false;
res.status(200).json(todos[todoIndex]);
} else {
res.status(404).end('Todo not found');
}
} catch (error) {
console.error(error);
res.status(500).end('Internal Server Error');
}
}
break;

case 'DELETE':
const { id } = req.body;
if (!id) {
res.status(400).json({ error: 'ID is required' });
} else {
try {
todos = todos.filter(todo => todo.id !== id);
res.status(204).end();
} catch (error) {
console.error(error);
res.status(500).end('Internal Server Error');
}
}
break;

case 'PATCH':
const { completed, id } = req.body;
if (!id) {
res.status(400).json({ error: 'ID is required' });
} else {
try {
const todoIndex = todos.findIndex(todo => todo.id === id);
if (todoIndex !== -1) {
todos[todoIndex].completed = completed || false;
res.status(200).json(todos[todoIndex]);
} else {
res.status(404).end('Todo not found');
}
} catch (error) {
console.error(error);
res.status(500).end('Internal Server Error');
}
}
break;

default:
res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
res.status(405).end(`Method ${req.method} Not Allowed`);
}
}