import { createSecurable } from '@api/v1/controllers/securable.controller';
import { validatorMiddleware } from '@api/v1/middlewares';
import { Router } from "express";

const securableRouter: Router = Router();

securableRouter.post('/', 
    validatorMiddleware('securablePOST', 'body'), 
    createSecurable
);

export default securableRouter;
