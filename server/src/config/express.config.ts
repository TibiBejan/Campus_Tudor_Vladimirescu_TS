/*
* ================ Modules import ================
*/
import cookieParser from 'cookie-parser';
import express, { Express, NextFunction, Request, Response, response } from 'express';
import helmet from 'helmet';
/*
* ================ Middlewares import ================
*/
// import { errorLoggingMiddleware, errorMiddleware, morganMiddleware } from '@api/v1/middlewares';
import { errorMiddleware, morganMiddleware } from '@api/v1/middlewares';

/*
* ================ Routes import ================
*/
import router from '@api/v1/routes';
/*
* ================ Helpers import ================
*/
import { AppError, logger } from '@api/v1/helpers';
import { AppDataSource } from '@config/database';

/*
* ================ App init ================
*/
const app: Express = express();

/*
* ================ Typeorm MySQL Database init ================
*/
AppDataSource.initialize()
    .then(() => {
        logger.info('MySQL Database up and running...')
    })
    .catch((error) => {
        logger.error(new AppError("Failed to connect to the MySQL database!", 503, "DatabaseError", "ConnectionFailed"));
    });

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
app.use('/api/v1', router);  


app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Can not find ${req.originalUrl} on this server!`, 404, 'ApiError', 'RouteNotFound'))
});

/*
* ================ Global error middleware ================
*/

// app.use(errorLoggingMiddleware);
app.use(errorMiddleware);

export default app;