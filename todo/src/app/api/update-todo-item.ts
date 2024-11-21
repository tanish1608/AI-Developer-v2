import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface Todo {
id: string;
title: string;
completed: boolean;
}

let todos: Todo[] = [
{
id: "1",
title: "Buy groceries",
completed: false
},
{
id: "2",
title: "Do laundry",
completed: true
}
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
try {
switch (req.method) {
case 'GET':
const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
todos = response.data;
res.status(200).json(todos);
break;

case 'PUT':
const { id, title, completed } = req.body;
if (!id) {
throw new Error("ID is required");
}
const todoToUpdate = todos.find(todo => todo.id === id);
if (todoToUpdate) {
todoToUpdate.title = title || todoToUpdate.title;
todoToUpdate.completed = completed !== undefined ? completed : todoToUpdate.completed;
res.status(200).json({ message: 'Todo item updated successfully' });
} else {
throw new Error(`Todo item with ID ${id} not found`);
}
break;

case 'DELETE':
const { id: deleteId } = req.body;
if (!deleteId) {
throw new Error("ID is required");
}
todos = todos.filter(todo => todo.id !== deleteId);
res.status(204).end();
break;

default:
res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
res.status(405).end(`Method ${req.method} Not Allowed`);
}
} catch (error) {
console.error(error.message);
res.status(500).json({ error: "Internal Server Error" });
}
}