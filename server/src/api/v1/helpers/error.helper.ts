import { logger } from '@api/v1/helpers';
import { SendError } from "@api/v1/interfaces/types/errorHandler.type";

export class AppError extends Error {
    public readonly statusCode: number;
    public readonly status: string;
    public readonly type: string;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number, name: string, type: string) {
        super(message);

        this.statusCode = statusCode || 500;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.name = name;
        this.type = type;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export const sendDevelopmentError: SendError = (err, res) => {
    /*
    * ============== Send the error to Winston logger console ============== 
    */
    logger.error("ERROR");
    logger.error(`Type: ${err.name ? err.name : 'Unhandled Error'}`);
    logger.error(`Message: ${err.message}`);
    logger.error(`StatusCode: ${err.statusCode}`);

    logger.error('===========================');

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

export const sendProductionError: SendError = (err, res) => {
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