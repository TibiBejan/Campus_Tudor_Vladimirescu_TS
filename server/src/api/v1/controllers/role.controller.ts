import { asyncMiddleware } from "@api/v1/middlewares";
import { create, deleteById, patchById, putById, readAll, readById, restore } from '@api/v1/services/role.service';
import { NextFunction, Request, Response } from "express";
import { parse as parseBoolean } from 'query-string';

export const createRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roleResource = req.body;
        const roleResponse = await create(roleResource);

        res.status(201).json({
            success: true,
            payload: {
                id: roleResponse,
            },
            error: null,
            message: 'Success, user role inserted into the database!'
        });
    }
    catch(err) {
        next(err);
    }
});

export const restoreRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { roleId } = req.params;
        
        await restore(roleId);

        res.status(200).json({
            success: true,
            payload: {
                id: roleId,
            },
            error: null,
            message: 'Success, user role restored!'
        });
    }
    catch(err) {
        next(err);
    }
});

export const getRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { roleId } = req.params;

        const role = await readById(roleId);

        res.status(200).json({
            success: true,
            payload: {
                role,
            },
            error: null,
            message: `Success, user role fetched from the database!`,
        });
    }
    catch(err) {
        next(err)
    }
});

export const getDeletedRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { roleId } = req.params;

        const deletedRole = await readById(roleId, true);

        res.status(200).json({
            success: true,
            payload: {
                deletedRole,
            },
            error: null,
            message: `Success, user role fetched from the database trashcan!`,
        });
    }
    catch(err) {
        next(err)
    }
});

export const getRoles = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roles = await readAll();

        res.status(200).json({
            success: true,
            payload: {
                roles,
                total_results: roles.length,
            },
            error: null,
            message: `Success, user roles fetched from the database!`,
        });
    }
    catch(err) {
        next(err);
    }
});

export const getDeletedRoles = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedRoles = await readAll(true);

        res.status(200).json({
            success: true,
            payload: {
                deletedRoles,
                total_results: deletedRoles.length,
            },
            error: null,
            message: `Success, user roles fetched from the database trashcan!`,
        });
    }
    catch(err) {
        next(err);
    }
});

export const updateRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roleResource = req.body;
        const { roleId } = req.params;

        await patchById(roleId, roleResource);

        res.status(200).json({
            success: true,
            payload: {
                id: roleId,
            },
            error: null,
            message: 'Success, user role updated into the database!'
        });
    }
    catch(err) {
        next(err);
    }
});

export const replaceRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roleResource = req.body;
        const { roleId } = req.params;

        await putById(roleId, roleResource);

        res.status(200).json({
            success: true,
            payload: {
                id: roleId,
            },
            error: null,
            message: 'Success, user role updated into the database!'
        });
    }
    catch(err) {
        next(err);
    }
});

export const deleteRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { roleId } = req.params;
        const deleteQuery = req.query.permanent ? req.query.permanent : false;
        const deleteFlag = parseBoolean(`permanent=${deleteQuery}`, { parseBooleans: true });

        if(deleteFlag.permanent) {
            await deleteById(roleId, true);
        } else {
            await deleteById(roleId);
        }

        res.status(204).json({
            success: true,
            error: null,
            message: `Success, user role ${deleteFlag.permanent ? 'permanently' : 'soft'} deleted from the database!`
        });
    }
    catch(err) {
        next(err);
    }
});