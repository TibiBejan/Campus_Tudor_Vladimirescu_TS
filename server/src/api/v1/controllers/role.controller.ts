import { AppError } from "@api/v1/helpers";
import { asyncMiddleware } from "@api/v1/middlewares";
import { create, deleteById, patchById, putById, readAll, readById } from '@api/v1/services/role.service';
import { NextFunction, Request, Response } from "express";

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
            message: 'Success, user role fetched from the database!',
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
            message: 'Success, user roles fetched from the database!',
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

        await deleteById(roleId);

        res.status(200).json({
            success: true,
            payload: {
                id: roleId,
            },
            error: null,
            message: 'Success, user role deleted from the database!'
        });
    }
    catch(err) {
        next(err);
    }
});