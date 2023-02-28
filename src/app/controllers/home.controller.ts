import express, { Request, Response, Router } from 'express';

class HomeController {
    public router: Router = express.Router();

    public routePrefix = 'home';

    constructor() {
        this.loadRoutes();
    }

    private loadRoutes() {
        /* eslint-disable @typescript-eslint/unbound-method */
        this.router.get('/', this.getWelcome);
        /* eslint-enable @typescript-eslint/unbound-method */
    }

    public getWelcome(req: Request, res: Response): Response {
        return res.json({
            data: 'This is home controller',
        });
    }
}

export default new HomeController();
