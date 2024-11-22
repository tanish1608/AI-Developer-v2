import { NextApiRequest, NextApiResponse } from 'next';
import { Route } from './Route';

export class APIRouter {
private routes: Route[];

constructor() {
this.routes = [];
}

getHandlers(): any {
return async function (req: NextApiRequest, res: NextApiResponse) {
try {
const method = req.method.toLowerCase();
const route = this.routes.find((route) => route.httpMethod === method);
if (route) {
return await route.handler(req, res);
}
res.setHeader('Allow', Object.keys(this.routes.reduce((acc, route) => ({ ...acc, [route.httpMethod]: true }), {})));
res.status(405).json({ error: `Method $req.method} Not Allowed` });
} catch (error) {
ErrorHandlingMiddleware.handleError(error, res);
}
};
}

post(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>, path: string) {
this.routes.push({
httpMethod: 'POST',
path,
handler,
});
return this;
}

get(handler: (req: NextApiRequest, res: NextApiResponse) => Promise