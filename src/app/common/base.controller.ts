import express, { Router } from 'express';
import Controller from '../interfaces/Controller';

export default class BaseController implements Controller {
    routePrefix: string;

    router: Router = express.Router();

    constructor() {
        this.loadRoutes();
    }

    loadRoutes(): void {}
}
