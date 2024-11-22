import { NextApiRequest, NextApiResponse } from 'next';
import { Task } from '../types/TaskTypes';
import { TodoModel } from '../models/TodoModel';
import { APIRouter } from '../components/APIRouter';
import { ErrorHandlingMiddleware } from '../components/ErrorHandlingMiddleware';

let tasks: Task[] = [];
let lastId: number = 0;

const router = new APIRouter();

router.get('/', async (req: NextApiRequest, res: NextApiResponse) => {
try {
const results = await TodoModel.find();
res.status(200).json(results);
} catch (error) {
ErrorHandlingMiddleware.handleError(error, res);
}
});

router.post('/', async (req: NextApiRequest, res: NextApiResponse) => {
try {
const { title, completed } = req.body;

if (!title) {
return res.status(400).json({ error: 'Title is required' });
}

const newTask: Task = new TodoModel({
id: lastId.toString(),
title,
completed: completed || false,
});

await TodoModel.create(newTask);
lastId++;
res.status(201).json(newTask);
} catch (error) {
ErrorHandlingMiddleware.handleError(error, res);
}
});

router.delete('/:id', async (req: NextApiRequest, res: NextApiResponse) => {
try {
const id = req.params.id;

if (!id) {
return res.status(400).json({ error: 'ID is required' });
}

await TodoModel.deleteOne({ _id: req.params.id });
res.status(204).end();
} catch (error) {
ErrorHandlingMiddleware.handleError(error, res);
}
});

router.get('/:id', async (req: NextApiRequest, res: NextApiResponse) => {
try {
const id = req.params.id;
if (!id) {
return res.status(400).json({ error: 'ID is required' });
}

const task = await TodoModel.findOne({ _id: req.params.id });
if (!task) {
return res.status(404).json({ error: 'Task not found' });
}
} catch (error) {
ErrorHandlingMiddleware.handleError(error, res);
}
});

export default router.getHandlers();