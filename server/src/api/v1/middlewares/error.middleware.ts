import { logger, sendDevelopmentError, sendProductionError } from '@api/v1/helpers';
import { ErrorMiddleware } from '@api/v1/interfaces/types/errorHandler.type';
import environmentConstants from '@config/constants';

export const errorMiddleware: ErrorMiddleware = (err, _req, res, _next) => {
    err.message = err.message || "Something went wrong!"

    if (environmentConstants.env === "development") {
        sendDevelopmentError(err, res);
    } else if (environmentConstants.env === "production") {
        sendProductionError(err, res);
    }
}

// export const errorLoggingMiddleware: ErrorMiddleware = (err, _req, _res, _next) => {
//     /*
//     * ============== Send the error to Winston logger console ============== 
//     */
//     logger.error("ERROR");
//     logger.error(`Type: ${err.name ? err.name : 'Unhandled Error'}`);
//     logger.error(`Message: ${err.message}`);
//     logger.error(`StatusCode: ${err.statusCode}`);

//     logger.error('===========================');

//     logger.error(err);
// }