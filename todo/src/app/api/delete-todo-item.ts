import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

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

interface Todo {
id: string;
title: string;
completed: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

const { id } = req.body;

switch (req.method) {
case 'DELETE':
try {
if (!id) {
throw new Error("ID is required");
}
todos = todos.filter(todo => todo.id !== id);
res.status(204).end();
} catch (error) {
console.error(error.message);
res.status(500).json({ error: "Internal Server Error" });
}

break;

default:
try {
throw new Error(`Method ${req.method} Not Allowed`);
} catch (error) {
res.setHeader('Allow', ['DELETE']);
res.status(405).end(error.message);
}
}
}

interface Body {
id: string;
}