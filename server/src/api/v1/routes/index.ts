import { Router, Request, Response } from 'express';
import userRouter from './user.route';

const router: Router = Router();

router.get('/status', (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "Server is up and running...",
        timestamp: new Date().toISOString(),
        ip: req.ip,
        hostname: req.hostname,
        url: req.originalUrl,
    });
});

router.use('/user', userRouter);


export default router;