import { Request, Response, NextFunction } from "express";
import { asyncMiddleware } from "@api/v1/middlewares";
import { ICreateRoleReqBody, IRoleResponse } from "@api/v1/interfaces/role.interface";
import { CreateRoleDTO } from "@api/v1/dto/role.dto";

export const createRole = asyncMiddleware(async (req: ICreateRoleReqBody, res: Response, next: NextFunction) => {
    req.body.title
    req.body.agdagadgadg

    res.status(200).json({
        status: "success",
        message: "User fetched from the database",
    });
});

export const getRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "User fetched from the database",
    });
});

export const getRoles = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "User fetched from the database",
    });
});


export const updateRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "User fetched from the database",
    });
});

export const deleteRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "User fetched from the database",
    });
});