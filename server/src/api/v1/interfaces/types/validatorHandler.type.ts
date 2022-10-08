import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
 
export type ValidatorHandler = (schema: string, property: string) => (req: Request, res: Response, next: NextFunction) => Promise<void>

export type ValidatorObject = {
    [key: string]: Joi.ObjectSchema
};

export type RequestStructure = {
    [key: string]: Partial<Request>
}