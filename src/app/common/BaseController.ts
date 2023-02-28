import express, { Router } from 'express';

export default abstract class BaseController {
    public routePrefix: string;

    public router: Router = express.Router();

    protected constructor() {
        this.loadRoutes();
    }

    protected loadRoutes(): void {}
}
