import environmentConstants from '@config/constants';
import { ErrorMiddleware } from '@api/v1/interfaces/types/errorHandler.type';
import { logger, sendDevelopmentError, sendProductionError } from '@api/v1/helpers';

export const errorMiddleware: ErrorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Something went wrong!"

    if (environmentConstants.env !== "production") {
        sendDevelopmentError(err, res);
    } else if (environmentConstants.env === "production") {
        sendProductionError(err, res);
    }
}

export const errorLoggingMiddleware: ErrorMiddleware = (err, req, res, next) => {
    /*
    * ============== Send the error to Winston logger console ============== 
    */
    logger.error("ERROR");
    logger.error(`Type: ${err.name ? err.name : 'Unhandled Error'}`);
    logger.error(`Message: ${err.message}`);
    logger.error(`StatusCode: ${err.statusCode}`);

    logger.error('===========================');

    logger.error(err);
}