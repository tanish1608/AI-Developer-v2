import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from './types/TodoTypes';

let todos: Todo[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
try {
switch (req.method) {
case 'GET':
return res.status(200).json(todos);

case 'POST':
const { title, completed } = req.body;

if (!title) {
return res.status(400).json({ error: 'Title is required' });
}

const newTodo: Todo = {
id: Date.now().toString(),
title,
completed: completed || false,
};

todos.push(newTodo);
return res.status(201).json(newTodo);

case 'DELETE':
const { id } = req.body;
todos = todos.filter((todo) => todo.id !== id);
return res.status(204).end();

default:
res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
} catch (error) {
console.error(error);
return res.status(500).json({ error: 'Internal Server Error' });
}
}