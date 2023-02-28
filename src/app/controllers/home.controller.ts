import { Request, Response } from 'express';
import BaseController from '../common/BaseController';

export default class HomeController extends BaseController {
    public routePrefix = 'home';

    constructor() {
        super();
    }

    protected loadRoutes(): void {
        /* eslint-disable @typescript-eslint/unbound-method */
        this.router.get('/', this.getWelcome);
        this.router.get('/hello', this.sayHello);
        /* eslint-enable @typescript-eslint/unbound-method */
    }

    public getWelcome(req: Request, res: Response): Response {
        return res.json({
            data: 'This is home controller',
        });
    }

    public sayHello(req: Request, res: Response): Response {
        return res.json({
            data: 'Say hello Guest',
        });
    }
}
