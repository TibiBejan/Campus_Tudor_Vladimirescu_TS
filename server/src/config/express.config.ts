/*
* ================ Modules import ================
*/
import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
/*
* ================ Middlewares import ================
*/
import { morganMiddleware, errorMiddleware } from '@api/v1/middlewares';
/*
* ================ Routes import ================
*/
import router from '@api/v1/routes';
/*
* ================ Helpers import ================
*/
import { logger, AppError } from '@api/v1/helpers';


/*
* ================ App init ================
*/
const app: Express = express();

/*
* ================ Global middlewares ================
*/
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morganMiddleware);

/*
* ================ Routes config ================
*/
app.use('api/v1/', router);


app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Can not find ${req.originalUrl} on this server!`, 404, 'ApiError', 'RouteNotFound'))
});

/*
* ================ Global error middleware ================
*/
app.use(errorMiddleware);

export default app;