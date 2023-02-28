import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import homeController from './app/controllers/home.controller';

dotenv.config();

const port = process.env.PORT || 9000;
const app = express();

app.use(bodyParser.json());

/* eslint-disable */
app.get('/', (request: Request, response: Response) =>
    response.json({
        status: 'Success',
        message: 'Welcome to Starter API',
    }),
);
/* eslint-enable */

const controllers = [homeController];

controllers.forEach((controller) => {
    app.use(`/${controller.routePrefix}`, controller.router);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
