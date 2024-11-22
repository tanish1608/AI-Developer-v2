import { NextApiRequest, NextApiResponse } from 'next';
import { Task } from './types/TaskTypes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
try {
switch (req.method) {
case 'GET':
const response = await fetch('https://api.example.com/tasks'); // Replace with your actual API endpoint
const tasks: Task[] = await response.json();
return res.status(200).json(tasks);

default:
res.setHeader('Allow', ['GET']);
return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
} catch (error) {
console.error(error);
return res.status(500).json({ error: 'Internal Server Error' });
}
}