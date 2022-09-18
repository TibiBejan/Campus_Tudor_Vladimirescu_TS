import { Request, Response, NextFunction } from 'express';
import { AsyncHandler } from '@api/v1/interfaces/types/asyncHandler.type';

const asyncHandler = (fn: AsyncHandler) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        fn(req, res, next).catch(next);
    }
}

/*
* One liner ES6
*/
// const asyncHandler = (fn) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

export default asyncHandler;