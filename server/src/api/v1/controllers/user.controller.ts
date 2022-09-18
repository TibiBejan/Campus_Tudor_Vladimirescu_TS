import { Request, Response, NextFunction } from 'express';
import { asyncMiddleware } from "@api/v1/middlewares";

export const getUser = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "User fetched from the database",
    });
});