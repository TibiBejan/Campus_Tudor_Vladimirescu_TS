import environmentConstants from '@config/constants';
import { ErrorMiddleware } from '@api/v1/interfaces/types/errorHandler.type';
import { sendDevelopmentError, sendProductionError } from '@api/v1/helpers';

const errorMiddleware: ErrorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Something went wrong!"

    if (environmentConstants.env !== "production") {
        sendDevelopmentError(err, res);
    } else if (environmentConstants.env === "production") {
        sendProductionError(err, res);
    }
}

export default errorMiddleware;