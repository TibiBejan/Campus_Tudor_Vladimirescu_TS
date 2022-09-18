// Modules import
import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
// ENV import
import environmentConstants from '@config/constants';

// Middlewares
import { morganMiddleware, errorMiddleware } from '@api/v1/middlewares';

// Routes

// Utils
import { logger, AppError } from '@api/v1/helpers';


const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());


app.use(morganMiddleware);


app.get('/api/v1/status', (req: Request, res: Response, next: NextFunction) => {
    logger.info("Checking the API status: Everything is OK");

    res.status(200).json({
        status: "success",
        message: "THE API is up and running!"
    })
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Can not find ${req.originalUrl} on this server!`, 404, "ApiError", "RouteNotFound"))
});

app.use(errorMiddleware);

export default app;