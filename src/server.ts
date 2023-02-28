import dotenv from 'dotenv';

import App from './app';
import HomeController from './app/controllers/home.controller';

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 9000;
const app = new App([new HomeController()]);

app.startServer(port);
