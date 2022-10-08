import { asyncMiddleware } from "@api/v1/middlewares";
import { NextFunction, Request, Response } from "express";
// import { ICreateRoleReqBody, IRoleResponse } from "@api/v1/interfaces/role.interface";
import { IRoleBodyWrite } from "@api/v1/interfaces/role.interface";

export const createRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as IRoleBodyWrite;
    console.log(data);

    res.status(200).json({
        status: "success",
        message: "Role created",
    });
});

export const getRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "Role fetched from the database",
    });
});

export const getRoles = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "Roles fetched from the database",
    });
});


export const updateRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "Role updated from the database",
    });
});

export const deleteRole = asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: "success",
        message: "Role deleted from the database",
    });
});