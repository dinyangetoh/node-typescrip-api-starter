import { Router } from 'express';

export default abstract class Controller {
    routePrefix: string;

    router: Router;

    loadRoutes(): void {}
}
