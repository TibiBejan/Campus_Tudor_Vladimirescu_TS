import { createRole, deleteRole, getRole, getRoles, updateRole } from '@api/v1/controllers/role.controller';
import { validatorMiddleware } from '@api/v1/middlewares';
import { Router } from "express";

const roleRouter: Router = Router();

roleRouter.post('/', validatorMiddleware('rolePOST', 'body'), createRole);
roleRouter.get('/', getRoles);
roleRouter.get('/:roleId', validatorMiddleware('rolePARAMS', 'params'), getRole);
roleRouter.patch('/:roleId', validatorMiddleware('rolePARAMS', 'params'), validatorMiddleware('roleUPDATE', 'body'), updateRole);
roleRouter.delete('/:roleId', validatorMiddleware('rolePARAMS', 'params'), deleteRole);

export default roleRouter;