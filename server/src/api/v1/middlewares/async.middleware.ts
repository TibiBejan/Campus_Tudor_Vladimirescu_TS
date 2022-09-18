import { Request, Response, NextFunction } from 'express';

type AsyncHandlerFunc = (req: Request, res: Response, next: NextFunction) => Promise<void>

const asyncHandler = (fn: AsyncHandlerFunc) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        fn(req, res, next).catch(next);
    }
}

/*
* One liner ES6
*/
// const asyncHandler = (fn) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

export default asyncHandler;