import { Request, Response, NextFunction } from 'express';

export type AsyncHandler<T> = (req: T, res: Response, next: NextFunction) => Promise<void>
