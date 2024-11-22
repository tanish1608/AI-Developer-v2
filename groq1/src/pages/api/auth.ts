import { NextApiRequest, NextApiResponse } from 'next';
import { User } from './types/UserTypes';
import { bcrypt } from 'bcrypt';
import jwt from 'jsonwebtoken';

const users: User[] = [
{
id: '1',
email: 'user@example.com',
password: bcrypt.hashSync('password', 10),
},
];

const secretKey = process.env.SECRET_KEY || 'secret';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
try {
switch (req.method) {
case 'POST':
const { email, password } = req.body;

const user = users.find((user) => user.email === email);

if (!user) {
return res.status(401).json({ error: 'Invalid email or password' });
}

const isValidPassword = bcrypt.compareSync(password, user.password);

if (!isValidPassword) {
return res.status(401).json({ error: 'Invalid email or password' });
}

const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

return res.status(200).json({ token });
default:
return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
} catch (error) {
console.error(error);
return res.status(500).json({ error: 'Internal Server Error' });
}
}