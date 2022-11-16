import { asyncMiddleware } from "@api/v1/middlewares";
import { create, deleteById, patchById, putById, readALl, readById, restore } from '@api/v1/services/securable.service';
import { NextFunction, Request, Response } from 'express';
import { parse as parseBoolean } from 'query-string';

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

export const getDeletedSecurable = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { securableId } = req.params;
        const deletedSecurable = await readById(securableId, true);

        res.status(200).json({
            success: true,
            payload: {
                deletedSecurable,
            },
            error: null,
            message: 'Success, role securable fetched from the database from trashcan!',
        });
    }
    catch(err) {
        next(err);
    }
});

export const getSecurables = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const securables = await readALl();

        res.status(200).json({
            success: true,
            payload: {
                securables,
                total_results: securables.length,
            },
            error: null,
            message: `Success, user role securables fetched from the database!`,
        });
    }
    catch(err) {
        next(err);
    }
});

export const getDeletedSecurables = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedSecurables = await readALl(true);

        res.status(200).json({
            success: true,
            payload: {
                deletedSecurables,
                total_results: deletedSecurables.length,
            },
            error: null,
            message: `Success, user role securables fetched from the database trashcan!`,
        });
    }
    catch(err) {
        next(err);
    }
});

export const updateSecurable = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const securableResource = req.body;
        const { securableId } = req.params;

        await patchById(securableId, securableResource);

        res.status(200).json({
            success: true,
            payload: {
                id: securableId,
            },
            error: null,
            message: 'Success, role securable updated into the database!'
        });
    }
    catch(err) {
        next(err);
    }
});

export const replaceSecurable = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const securableResource = req.body;
        const { securableId } = req.params;

        await putById(securableId, securableResource);

        res.status(200).json({
            success: true,
            payload: {
                id: securableId,
            },
            error: null,
            message: 'Success, role securable updated into the database!'
        });
    }
    catch(err) {
        next(err);
    }
});

export const deleteSecurable = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { securableId } = req.params;
        const deleteQuery = req.query.permanent ? req.query.permanent : false;
        const deleteFlag = parseBoolean(`permanent=${deleteQuery}`, { parseBooleans: true });

        if(deleteFlag.permanent) {
            await deleteById(securableId, true);
        } else {
            await deleteById(securableId);
        }

        res.status(204).json({
            success: true,
            error: null,
            message: `Success, role securable ${deleteFlag.permanent ? 'permanently' : 'soft'} deleted from the database!`
        });
    }
    catch(err) {
        next(err);
    }
});

export const restoreSecurable = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { securableId } = req.params;
        
        await restore(securableId);

        res.status(200).json({
            success: true,
            payload: {
                id: securableId,
            },
            error: null,
            message: 'Success, role securable restored!'
        });
    }
    catch(err) {
        next(err);
    }
});
