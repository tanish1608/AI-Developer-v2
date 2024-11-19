import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from './types/TodoType';

let todos: Todo[] = [
{
id: '1',
title: 'Buy milk',
completed: true,
},
{
id: '2',
title: 'Do laundry',
completed: false,
},
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
switch (req.method) {
case 'GET':
res.status(200).json(todos);
break;

case 'POST':
const { title } = req.body;
if (!title) {
res.status(400).json({ error: 'Title is required' });
} else {
const newTodo: Todo = {
id: Date.now().toString(),
title,
completed: false,
};
todos.push(newTodo);
res.status(201).json(newTodo);
}
break;

case 'PUT':
const { id, title, completed } = req.body;
if (!id) {
res.status(400).json({ error: 'ID is required' });
} else {
const todoIndex = todos.findIndex((todo) => todo.id === id);
if (todoIndex >= 0) {
todos[todoIndex] = { ...todos[todoIndex], title, completed };
res.status(200).json(todos[todoIndex]);
} else {
res.status(404).json({ error: 'Todo not found' });
}
}
break;

case 'DELETE':
const { id } = req.body;
if (!id) {
res.status(400).json({ error: 'ID is required' });
} else {
todos = todos.filter((todo) => todo.id !== id);
res.status(204).end();
}
break;

default:
res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
res.status(405).end(`Method ${req.method} Not Allowed`);
}
}

export interface Todo {
id: string;
title: string;
completed: boolean;
}