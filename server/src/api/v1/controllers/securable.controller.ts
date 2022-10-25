import { asyncMiddleware } from "@api/v1/middlewares";
import { create, readById } from '@api/v1/services/securable.service';
import { NextFunction, Request, Response } from 'express';

export const createSecurable = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { resource, roleId } = req.body;
        const securableResponse = await create(resource, roleId);

        res.status(201).json({
            success: true,
            payload: {
                id: securableResponse,
            },
            error: null,
            message: 'Success, role securable inserted into the database!'
        });
    }
    catch(err) {
        next(err);
    }
});

export const getSecurable = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { securableId } = req.params;
        const securable = await readById(securableId);

        res.status(200).json({
            success: true,
            payload: {
                securable,
            },
            error: null,
            message: 'Success, role securable fetched from the database!',
        });
    }
    catch(err) {
        next(err);
    }
});

// export const getSecurables = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
//     res.status(200).json({
//         status: "success",
//         message: "Securables fetched from the database",
//     });
// });