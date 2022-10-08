import { AsyncHandler } from '@api/v1/interfaces/types/asyncHandler.type';
import { NextFunction, Request, Response } from 'express';

const asyncHandlerMiddleware = (fn: AsyncHandler) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        fn(req, res, next).catch(next);
    }
}

/*
* One liner ES6
*/
// const asyncHandler = (fn) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

export default asyncHandlerMiddleware;