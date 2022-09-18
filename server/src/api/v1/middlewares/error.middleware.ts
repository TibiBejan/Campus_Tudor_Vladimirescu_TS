import { Request, Response, NextFunction } from "express";
import environmentConstants from '@config/constants';
import { logger, AppError } from '@api/v1/helpers';

type ErrorMiddlewareFunc = (err: AppError, req: Request, res: Response, next: NextFunction) => void;

type SendErrorFunc = (err: AppError, res: Response) => void;

const sendDevelopmentError: SendErrorFunc = (err, res) => {
    /*
    * ============== Send the error to Winston logger ============== 
    */
    logger.error(err);
    /*
    * =========== Send the response error to the client ============ 
    */
    res.status(err.statusCode).json({
        code: err.statusCode,
        status: err.status,
        name: err.name,
        type: err.type,
        message: err.message,
        isOperational: err.isOperational,
        stack: err.stack,
    });
}

const sendProductionError: SendErrorFunc = (err, res) => {
    /*
    * =========== Send the response error to the client ============ 
    */
    if (err.isOperational) {
        /*
        * Operational, trusted error sent to the client
        */
        res.status(err.statusCode).json({
            code: err.statusCode,
            status: err.status,
            message: err.message,
        });
    } else {
        /*
        * Programming or unknown error detected, send generic message to the client
        */
        res.status(500).json({
            code: 500,
            status: "error",
            message: "Something went wrong, please try again!",
        });
    }

}

const errorMiddleware: ErrorMiddlewareFunc = (err, req, res, next) => {
    err.message = err.message || "Something went wrong!"

    if (environmentConstants.env !== "production") {
        sendDevelopmentError(err, res);
    } else if (environmentConstants.env === "production") {
        sendProductionError(err, res);
    }
}

export default errorMiddleware;