import { Request, Response } from "express";
import { Send } from "express-serve-static-core";

export interface ICreateRoleReqBody extends Request {
    title: string;
    slug: string;
    description?: string;
    is_active: boolean;
}

export interface IRoleResponse<ResBody> extends Response {
    json: Send<ResBody, this>;
}