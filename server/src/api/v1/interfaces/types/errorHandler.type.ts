import { Request, Response, NextFunction } from 'express';
import { AppError } from '@api/v1/helpers';

export type ErrorMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction) => void;

export type SendError = (err: AppError, res: Response) => void;
