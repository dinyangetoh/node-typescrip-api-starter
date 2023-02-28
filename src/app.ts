import bodyParser from 'body-parser';
import express, { Application } from 'express';
import BaseController from './app/common/BaseController';

export default class App {
    public expressApp: Application = express();

    constructor(readonly controllers: BaseController[]) {}

    public init() {
        this.loadPlugins();
        this.loadRoutes();
    }

    private loadPlugins() {
        this.expressApp.use(bodyParser.json());
    }

    private loadRoutes() {
        this.controllers.forEach(({ router, routePrefix }) => {
            this.expressApp.use(`/${routePrefix}`, router);
        });
    }

    public startServer(port = 9000) {
        this.init();
        this.expressApp.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}
